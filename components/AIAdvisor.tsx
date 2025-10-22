import React, { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
// Fix: Import GoogleGenAI from @google/genai to use the Gemini API.
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA } from '../constants';

const AIAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState(''); // State to hold the query that was submitted
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ref, isVisible] = useAnimateOnScroll();

  const handleAskAI = async () => {
    if (!query.trim()) {
      setError('Vui lòng nhập câu hỏi của bạn.');
      return;
    }
    setLoading(true);
    setError('');
    setResponse('');
    setSubmittedQuery(query); // Store the submitted query for context

    try {
      // Fix: Initialize GoogleGenAI with a named apiKey parameter as per guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const resumeContext = `
        PERSONAL INFORMATION: ${JSON.stringify(PERSONAL_INFO, null, 2)}
        
        EXPERIENCE: ${JSON.stringify(EXPERIENCE_DATA, null, 2)}
        
        PROJECTS: ${JSON.stringify(PROJECTS_DATA, null, 2)}
      `;

      const keySummary = `
        **TÓM TẮT NĂNG LỰC CHÍNH CỦA DẮT SA LIÊM:**
        Chuyên gia Digital Marketing với kinh nghiệm thực chiến về SEO và Google Ads.
        - **Thành tựu nổi bật:** Giảm 75% chi phí khách hàng tiềm năng, đạt ROAS 6.59, quản lý thành công 95% dự án SEO vượt KPI, và tăng trưởng traffic website công ty lên 17,400 lượt nhấp/tháng. Đạt giải Quán Quân cuộc thi khởi nghiệp và giải "Intern Xuất Sắc".
        - **Kỹ năng chính:**
          - **SEO:** Nghiên cứu từ khóa, SEO On-page & Technical, xây dựng Content Guideline, Schema.
          - **Google Ads:** Lập kế hoạch ngân sách, theo dõi chuyển đổi (GA4), A/B testing, tối ưu hiệu suất.
          - **Công cụ:** Thành thạo Google Analytics 4, Google Data Studio, Lark Suite, Make.com.
      `;

      const prompt = `
        You are an AI career advisor representing Dắt Sa Liêm, a professional with strong experience in Google Ads, SEO, and the broader field of Digital Marketing. Your goal is to answer questions from recruiters or visitors based on his resume information provided below. 
        Start by consulting the key summary for a quick overview, then refer to the detailed information for specifics.
        Only use the information given. Be friendly, professional, and answer in Vietnamese. 
        If the question is outside the scope of the provided resume, politely decline to answer, explaining that you can only answer questions about Sa Liêm's professional profile.

        Here is the summary and full resume information:
        ${keySummary}

        ---

        **CHI TIẾT CV:**
        ${resumeContext}

        Now, please answer the following question from a visitor:
        "${query}"
      `;

      // Fix: Use ai.models.generateContent for making API calls, which is the correct and current method.
      // Fix: Use 'gemini-2.5-flash' model for this text-based Q&A task.
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      // Fix: Access the generated text directly from the 'text' property of the response.
      const aiResponse = result.text;

      if (!aiResponse || !aiResponse.trim()) {
        setError('Trợ lý AI không thể tạo câu trả lời cho câu hỏi này. Vui lòng thử diễn đạt lại câu hỏi của bạn.');
      } else {
        setResponse(aiResponse);
      }

    } catch (err) {
      console.error(err);
      let errorMessage = 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.';
      if (err instanceof Error) {
        if (err.message.includes('request was blocked')) {
            errorMessage = 'Câu hỏi của bạn có thể đã vi phạm chính sách an toàn của AI. Vui lòng điều chỉnh và thử lại.';
        } else if (err.message.includes('API_KEY_INVALID')) {
          errorMessage = 'Lỗi xác thực API. Vui lòng kiểm tra lại cấu hình.';
        } else if (err.message.toLowerCase().includes('failed to fetch')) {
          errorMessage = 'Lỗi kết nối mạng. Vui lòng kiểm tra đường truyền và thử lại.';
        } else if (err.message.includes('500') || err.message.includes('503')) {
          errorMessage = 'Máy chủ AI đang gặp sự cố. Vui lòng thử lại sau ít phút.';
        }
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      ref={ref} 
      id="ai-advisor" 
      aria-labelledby="ai-advisor-heading" 
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 id="ai-advisor-heading" className="text-3xl font-bold text-center text-white mb-4">
        Hỏi Đáp Cùng AI
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto bg-slate-800/50 p-6 sm:p-8 rounded-lg border border-slate-700 text-center">
        <p className="text-slate-400 mb-6">
          Bạn có câu hỏi về kinh nghiệm, kỹ năng hay dự án của Sa Liêm? Hãy hỏi trợ lý AI.
          Trợ lý được cung cấp dữ liệu từ CV này để đưa ra câu trả lời chính xác nhất.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ví dụ: Sa Liêm có kinh nghiệm gì về A/B testing?"
            className="flex-grow bg-slate-900 border border-slate-600 rounded-lg p-3 text-slate-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-300 resize-none disabled:bg-slate-800 disabled:cursor-not-allowed"
            rows={2}
            disabled={loading}
          />
          <button
            onClick={handleAskAI}
            disabled={loading}
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 shadow-lg disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100"
          >
            {loading ? 'Đang hỏi AI...' : 'Gửi Câu Hỏi'}
          </button>
        </div>
        {error && (
            <div className="mt-4 text-left p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                {submittedQuery && (
                  <p className="text-slate-500 italic mb-2">
                    Câu hỏi của bạn: "{submittedQuery}"
                  </p>
                )}
                <p className="text-red-400"><span className="font-bold">Lỗi:</span> {error}</p>
            </div>
        )}
        {response && (
          <div className="mt-6 p-6 bg-slate-900/50 border border-slate-700 rounded-lg text-left whitespace-pre-wrap">
             {submittedQuery && (
                <p className="text-slate-500 italic mb-4">
                    Câu hỏi của bạn: "{submittedQuery}"
                </p>
             )}
            <p className="text-slate-300">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAdvisor;