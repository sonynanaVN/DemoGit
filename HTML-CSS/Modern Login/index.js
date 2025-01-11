document.getElementById('loginform').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form tải lại trang

    const username = document.getElementById('emailForm').value;
    const password = document.getElementById('passwordForm').value;

    // Kiểm tra đăng nhập (thay thế điều kiện này bằng hệ thống xác thực thực tế)
    if (username === 'admin@gmail.com' && password === 'admin') {
        alert('Login successful!You are login with account guest');
        window.location.href = 'dashboard.html'; // Chuyển hướng đến trang bạn cung cấp
    } else {
        alert('Invalid username or password.');
    }
});
document.getElementById('create-account').addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    alert('You are going to page create account');
    window.location.href = 'createaccount.html'; // Chuyển hướng đến trang tạo tài khoản
});
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('passwordForm');
    const isPasswordVisible = passwordField.getAttribute('type') === 'password';
    passwordField.setAttribute('type', isPasswordVisible ? 'text' : 'password');
    this.textContent = isPasswordVisible ? 'visibility_off' : 'visibility';
});
