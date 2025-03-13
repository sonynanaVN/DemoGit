function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

// Lấy các liên kết
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

// Sự kiện cuộn đến các phần tử
link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
  scrollToElement(".features"); // Thay `.features` bằng selector của phần cần cuộn
});
