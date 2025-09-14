// --- Chức năng cho Menu trên di động ---
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});


// --- Khởi tạo và cấu hình Slider (SwiperJS) ---
const swiper = new Swiper('.mySwiper', {
    // Tự động lặp lại
    loop: true,
    
    // Số lượng slide hiển thị trên các kích thước màn hình
    slidesPerView: 1, // Mặc định 1 slide trên màn hình nhỏ
    spaceBetween: 30, // Khoảng cách giữa các slide

    // Cài đặt cho các màn hình lớn hơn (Responsive Breakpoints)
    breakpoints: {
        // Khi chiều rộng màn hình >= 768px (máy tính bảng)
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // Khi chiều rộng màn hình >= 1024px (máy tính để bàn)
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },

    // Dấu chấm phân trang
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Cho phép bấm vào dấu chấm để chuyển slide
    },

    // Nút mũi tên điều hướng (qua lại)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

