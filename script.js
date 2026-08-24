// ===================================
// 1. DARK MODE
// ===================================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  // จำค่าที่เลือกไว้ ครั้งหน้าเปิดเว็บจะเป็นโหมดเดิม
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// พอโหลดหน้าเว็บ เช็คว่าก่อนหน้านี้เลือกโหมดมืดไว้ไหม
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// ===================================
// 2. LOADING SCREEN
// ===================================
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  if (loader) {
    loader.classList.add("hidden");
  }
});

// ===================================
// 3. TYPING EFFECT
// ===================================
function startTypingEffect(elementId, text, speed = 80) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let i = 0;
  el.textContent = "";

  function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
}

// เรียกใช้ตอนโหลดหน้าเสร็จ (แก้ข้อความตรงนี้ได้ตามต้องการ)
window.addEventListener("DOMContentLoaded", function () {
  startTypingEffect("typing-text", "นี่คือเว็บไซต์แรกของดาวประกาย หากมีผิดพลาดประการใด ขอภัย");
});
