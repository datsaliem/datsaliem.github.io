// Lấy các phần tử HTML cần sử dụng
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Thêm sự kiện 'click' cho nút menu
menuBtn.addEventListener('click', () => {
    // Mỗi lần click, sẽ ẩn hoặc hiện menu mobile
    mobileMenu.classList.toggle('hidden');
});
