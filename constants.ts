
import type { ExperienceItem, Project } from './types';

export const PERSONAL_INFO = {
  name: "Dắt Sa Liêm",
  title: "Digital Marketing Specialist",
  location: "Bình Thạnh, Hồ Chí Minh",
  email: "Liemsal10@gmail.com",
  linkedin: "https://www.linkedin.com/in/saliem",
  about: "Em là Dắt Sa Liêm với nền tảng Digital Marketing từ trường FPT Polytechnic và kinh nghiệm tại OneAds, em mong muốn vận dụng kỹ năng SEO toàn diện (từ nghiên cứu từ khóa đến on-page/technical, content, entity) và quản lý Google Ads cơ bản để trực tiếp giúp công ty tăng trưởng organic traffic và tối ưu hiệu quả quảng cáo. Kinh nghiệm với Lark Suite, xây dựng quy trình và báo cáo cũng sẽ hỗ trợ tốt cho công việc. Em luôn sẵn sàng học hỏi và có trách nhiệm.",
  shortTermGoal: "Em đặt mục tiêu vận dụng hiệu quả kiến thức SEO & Google Ads sẵn có để nhanh chóng mang lại những cải thiện cụ thể cho các chỉ số (như traffic, thứ hạng) trong các dự án của công ty. Song song đó, em sẽ tích cực nắm bắt quy trình và phối hợp tốt với đội ngũ để công việc chung hiệu quả hơn.",
  longTermGoal: "Em mong muốn trở thành một chuyên viên Digital Marketing vững vàng, không chỉ làm tốt mà còn có thể chủ động đề xuất các giải pháp tối ưu cho chiến dịch, đồng hành và góp phần vào sự phát triển bền vững của công ty."
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Chuyên Viên Digital",
    company: "OneAds Digital",
    period: "06/2024 - Hiện tại",
    description: "Chịu trách nhiệm quản lý toàn diện các chiến dịch quảng cáo Google Ads cho các dự án khách hàng, đặc biệt là trong lĩnh vực thương mại điện tử.",
    tasks: [
      "Quản lý và tối ưu ngân sách quảng cáo hàng tháng (~400 triệu VNĐ).",
      "Lên kế hoạch và triển khai các chiến thuật A/B testing để nâng cao hiệu suất.",
      "Xây dựng hệ thống Dashboard báo cáo tự động trên Google Data Studio, tích hợp dữ liệu từ GA4.",
      "Phối hợp với team SEO và Creative để tối ưu trang đích (On-page, UX/UI).",
      "Giảm 75% chi phí trên mỗi khách hàng tiềm năng Facebook Ads (từ 200.000đ xuống 50.000đ) qua A/B testing.",
      "Đạt ROAS 6.59%, CTR 17.76% cho dự án TMĐT."
    ]
  },
  {
    role: "Quản Lý Dự Án SEO",
    company: "OneAds Digital",
    period: "08/2023 - 05/2024",
    description: "Quản lý và triển khai các dự án SEO, đảm bảo đạt và vượt KPI đã cam kết.",
    tasks: [
      "Xây dựng file quản lý, quy trình triển khai Content SEO và định hướng cho team.",
      "Kiểm soát chất lượng nội dung, kiểm tra sức khỏe website và thứ hạng từ khóa trên LarkSuite.",
      "Lập proposal, báo giá, plan triển khai cho khách hàng.",
      "Góp phần vào thành công của 95% trên tổng số 11 dự án triển khai, đều đạt và vượt KPI.",
      "Tăng trưởng traffic website OneAds đạt 17.400 lượt nhấp và 840.000 lượt hiển thị mỗi tháng."
    ]
  },
  {
    role: "Thực Tập Sinh SEO",
    company: "OneAds Digital",
    period: "02/2023 - 08/2023",
    description: "Hỗ trợ team SEO trong các hoạt động nghiên cứu, tối ưu on-page và xây dựng nội dung.",
    tasks: [
      "Lập Outline và viết content SEO theo Google Helpful Content Guidelines.",
      "Kiểm tra lỗi kỹ thuật, nghiên cứu từ khóa, và tối ưu liên kết nội bộ.",
      "Phối hợp với IT xây dựng Schema và triển khai hệ thống Social Entity.",
      "Được đề nghị ở lại làm việc chính thức, là 1 trong 2 TTS được chọn từ team 8 người.",
      "Đạt giải thưởng 'Intern Xuất Sắc' của công ty."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: "Quán Quân Khởi Sự Doanh Nghiệp FPoly",
        organization: "Gà Ta Hương Việt",
        period: "07/2023 - 08/2023",
        description: "Xác định phân khúc thị trường, nhắm mục tiêu, định vị thương hiệu, phân tích đối thủ và hoạch định chiến lược marketing số.",
        achievements: [
            "Đạt giải Quán Quân trong cuộc thi khởi nghiệp.",
            "Xây dựng thành công một kế hoạch marketing toàn diện từ A-Z.",
            "Nhận được đánh giá cao từ ban giám khảo về tính thực tế và tiềm năng của dự án."
        ],
        challenges: [
            "Nghiên cứu thị trường và đối thủ cạnh tranh trong thời gian ngắn.",
            "Cân đối ngân sách marketing giả định để đạt hiệu quả tối đa.",
            "Làm việc nhóm hiệu quả để thống nhất ý tưởng và chiến lược."
        ],
        strategies: [
            "Sử dụng mô hình STP (Segmentation, Targeting, Positioning) để xác định thị trường.",
            "Áp dụng ma trận SWOT để phân tích điểm mạnh, yếu, cơ hội, thách thức.",
            "Xây dựng chiến lược content marketing tập trung vào giá trị độc đáo của sản phẩm."
        ]
    },
    {
        title: "Top 10 FPT Edu Biz Talent",
        organization: "Tập Đoàn Vina T&T",
        period: "07/2023 - 08/2023",
        description: "Hoạch định chiến lược 5 năm phù hợp với tầm nhìn, sứ mệnh và giá trị cốt lõi của tập đoàn.",
        achievements: [
            "Lọt vào Top 10 của cuộc thi uy tín.",
            "Phát triển một bản kế hoạch chiến lược dài hạn có tính khả thi cao.",
            "Thể hiện được tư duy chiến lược và tầm nhìn kinh doanh."
        ],
        challenges: [
            "Nắm bắt và phân tích sâu sắc mô hình kinh doanh của một tập đoàn lớn.",
            "Đề xuất các giải pháp đột phá nhưng vẫn phù hợp với văn hóa doanh nghiệp.",
            "Dự báo xu hướng thị trường trong 5 năm tới."
        ],
        strategies: [
            "Sử dụng mô hình PESTEL để phân tích môi trường vĩ mô.",
            "Đề xuất các chiến lược đa dạng hóa sản phẩm và mở rộng thị trường.",
            "Tập trung vào chuyển đổi số và tối ưu hóa trải nghiệm khách hàng."
        ]
    },
    {
        title: "Giải Nhì Bee Nông Sản",
        organization: "Phước Long Trà",
        period: "03/2024 - 04/2024",
        description: "Nghiên cứu, thiết lập chân dung khách hàng mục tiêu và hoạch định chiến lược Marketing số cho thương hiệu.",
        achievements: [
            "Đạt giải Nhì chung cuộc.",
            "Xây dựng persona khách hàng chi tiết và chính xác.",
            "Kế hoạch marketing được đánh giá cao về sự sáng tạo và hiệu quả."
        ],
        challenges: [
            "Tìm ra insight độc đáo của khách hàng trong một thị trường cạnh tranh.",
            "Tạo ra một thông điệp truyền thông hấp dẫn và khác biệt cho sản phẩm trà.",
        ],
        strategies: [
            "Thực hiện khảo sát và phỏng vấn sâu để xây dựng chân dung khách hàng.",
            "Sử dụng chiến lược marketing đa kênh (omnichannel) để tiếp cận khách hàng.",
            "Tập trung vào storytelling và xây dựng cộng đồng thương hiệu."
        ]
    },
    {
        title: "Thành Viên Triển Khai",
        organization: "Baboitoys",
        period: "05/2024 - 05/2025",
        description: "Thiết lập kế hoạch Marketing, đạt 174 lượt thích, 254 theo dõi trên Facebook, 31.5k lượt xem video và 2.1k lượt nhấp từ content SEO.",
        achievements: [
            "Vượt các chỉ số KPI về tương tác trên mạng xã hội và traffic website.",
            "Tăng trưởng 254 lượt theo dõi trên fanpage trong thời gian ngắn.",
            "Đạt 2,100 lượt nhấp từ các hoạt động SEO, cho thấy hiệu quả của content."
        ],
        challenges: [
            "Xây dựng nhận diện thương hiệu từ con số không.",
            "Sản xuất nội dung (bài viết, video) đều đặn và chất lượng cao.",
            "Cạnh tranh với các đối thủ đã có mặt trên thị trường."
        ],
        strategies: [
            "Tập trung vào SEO on-page và technical để xây dựng nền tảng website vững chắc.",
            "Sản xuất video ngắn theo trend để tăng tương tác trên Facebook.",
            "Chạy các chiến dịch quảng cáo nhỏ để thu hút lượng theo dõi ban đầu."
        ]
    }
];