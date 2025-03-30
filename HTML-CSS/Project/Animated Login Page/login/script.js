document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");
    const guestLogin = document.getElementById("guestLogin"); // Đảm bảo tồn tại

    registerBtn.addEventListener("click", () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
    });

    let checkLogin = 0;
    let checkRegister = 0;
    let adminLoginAttempts = 0; // Biến đếm riêng cho Admin
    const maxError = 3; // Giới hạn số lần nhập sai

    // Xử lý đăng nhập
    const loginForm = document.getElementById("loginform");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.querySelector('.sign-in input[type="email"]').value.trim();
            const password = document.querySelector('.sign-in input[type="password"]').value.trim();

            if (username === "guest@gmail.com" && password === "guest") {
                alert("Đăng nhập thành công, chuyển tới trang quản lý với tư cách khách đăng nhập");
                setTimeout(() => {
                    window.location.href = "/main/Main.html";
                }, 1800);
            } else {
                checkLogin++;
                alert(`Tên đăng nhập hoặc mật khẩu không đúng, hãy thử lại.`);
                if (checkLogin >= maxError) {
                    alert("Bạn đã nhập sai quá nhiều lần!");
                    window.location.href = "/Error Page/index.html"; // Chuyển tới trang lỗi
                }
            }
        });
    }

    // Xử lý đăng ký
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.querySelector(".sign-up input[type='name']").value.trim();
            const email = document.querySelector(".sign-up input[type='email']").value.trim();
            const password = document.querySelector(".sign-up input[type='password']").value.trim();

            if (name !== "" && email !== "" && password !== "") {
                alert("Đăng ký thành công, chuyển tới trang chủ với tư cách khách đăng nhập");
                setTimeout(() => {
                    window.location.href = "/main/Main.html";
                }, 2000);
            } else {
                checkRegister++;
                alert(`Có lỗi xảy ra, hãy thử lại.`);
                if (checkRegister >= maxError) {
                    alert("Bạn đã nhập sai quá nhiều lần!");
                    window.location.href = "/Error Page/index.html"; // Chuyển tới trang lỗi
                }
            }
        });
    }

    // Xử lý đăng nhập admin
    const adminLoginForm = document.getElementById("adminLogin");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("click", function (e) {
            e.preventDefault();

            const username = document.querySelector('.sign-in input[type="email"]').value.trim();
            const password = document.querySelector('.sign-in input[type="password"]').value.trim();

            if (username === "admin@gmail.com" && password === "admin") {
                alert("Đăng nhập thành công, chuyển tới trang quản lý với tư cách admin");
                setTimeout(() => {
                    window.location.href = "/Manager/manager.html";
                }, 1800);
            } else {
                adminLoginAttempts++;
                alert(`Thông tin đăng nhập với tư cách Admin không đúng. Lần thử: ${adminLoginAttempts}/${maxError}`);
                if (adminLoginAttempts >= maxError) {
                    alert("Bạn đã nhập sai quá nhiều lần!");
                    window.location.href = "/Error Page/index.html"; // Chuyển tới trang lỗi
                }
            }
        });
    }

    // Xử lý đăng nhập tư cách khách
    if (guestLogin) {
        guestLogin.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Đang chuyển tới trang chủ với tư cách khách, vui lòng chờ trong vài giây");
            setTimeout(() => {
                window.location.href = "/main/Main.html";
            }, 3000);
        });
    }
});
