document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", () => {
      container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
  });

  // Xử lý đăng nhập
  const loginForm = document.getElementById("loginform");
  if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
          e.preventDefault(); // Ngăn tải lại trang

          const username = document.querySelector('.sign-in input[type="email"]').value.trim();
          const password = document.querySelector('.sign-in input[type="password"]').value.trim();

          if (username === "admin@gmail.com" && password === "admin") {
              alert("Login successful! Redirecting to Dashboard in few seconds...");
              setTimeout(() => {
                  window.location.href = "dashboard.html"; // Chuyển sau 3 giây
              }, 1800);
          } else {
              alert("Thông tin đăng nhập hoặc mật khẩu không đúng");
          }
      });
  }

  // Xử lý đăng ký
  const registerForm = document.querySelector(".sign-up form");
  if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
          e.preventDefault(); // Ngăn chặn tải lại trang

          const name = document.querySelector(".sign-up input[type='name']").value.trim();
          const email = document.querySelector(".sign-up input[type='email']").value.trim();
          const password = document.querySelector(".sign-up input[type='password']").value.trim();

          if (name !== "" || email !== "" || password !== "") {
              alert("Registration successful! Redirecting to Dashboard in few seconds...");
              setTimeout(() => {
                  window.location.href = "dashboard.html"; // Chuyển sau 3 giây
              }, 2000);
          } else {
              alert("Có lỗi xẩy ra,hãy thử lại");
          }
      });
  }
});
