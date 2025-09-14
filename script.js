document.addEventListener('DOMContentLoaded', function () {
    // --- Chức năng nâng cao cho Menu trên di động ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    // Lấy tất cả các đường link bên trong menu di động
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // 1. Chức năng Mở/Đóng menu chính
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 2. Chức năng TỰ ĐỘNG ĐÓNG menu khi người dùng bấm vào một mục
    // Điều này giúp cải thiện trải nghiệm người dùng
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Thêm class 'hidden' để ẩn menu đi
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Khởi tạo và cấu hình Slider (SwiperJS) với tính năng tự động chạy ---
    // Kiểm tra xem thư viện Swiper đã được tải thành công chưa
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.mySwiper', {
            // Tự động lặp lại vô hạn
            loop: true,
            
            // TỰ ĐỘNG TRƯỢT: Thêm tính năng này để slider sinh động hơn
            autoplay: {
              delay: 3000, // Thời gian chờ giữa các slide là 3 giây
              disableOnInteraction: false, // Không dừng tự động chạy khi người dùng tương tác
            },
            
            // Số lượng slide hiển thị trên các kích thước màn hình
            slidesPerView: 1, 
            spaceBetween: 30,

            // Cấu hình Responsive (Tự động thay đổi theo kích thước màn hình)
            breakpoints: {
                // Khi màn hình rộng từ 768px trở lên (máy tính bảng)
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // Khi màn hình rộng từ 1024px trở lên (máy tính)
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            },

            // Dấu chấm phân trang (các chấm tròn bên dưới slider)
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Nút mũi tên điều hướng (qua trái/phải)
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        // In ra lỗi nếu không tìm thấy thư viện SwiperJS
        console.error('Lỗi: Thư viện SwiperJS chưa được tải. Vui lòng kiểm tra lại đường link trong file index.html.');
    }
});

