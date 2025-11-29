// ===============================
// Navigation Toggle (Small Screens)
// ===============================
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("open");
  });
}

// ===============================
// Simple Image Slider
// ===============================
(function () {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slides img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let current = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  };

  const next = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prev = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  // init
  showSlide(current);

  // navigation
  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  // autoplay
  const AUTOPLAY = true;
  if (AUTOPLAY) {
    setInterval(next, 5000);
  }
})();

// ===============================
// Ancient Mode Toggle
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const ancientBtn = document.getElementById("ancient-toggle");

  ancientBtn?.addEventListener("click", () => {
    document.body.classList.toggle("ancient-mode");
  });
});

// === JS PLAYGROUND ===
const runBtn = document.getElementById("run-js");
const resetBtn = document.getElementById("reset-js");
const inputBox = document.getElementById("js-input");
const outputBox = document.getElementById("js-output");

// Bikin console.log muncul di layar
function hookConsoleLog() {
  const original = console.log;

  console.log = (...msg) => {
    outputBox.textContent += msg.join(" ") + "\n";
    original.apply(console, msg);
  };

  return () => (console.log = original); // restore
}

runBtn.addEventListener("click", () => {
  outputBox.textContent = ""; // clear sebelum run
  const unhook = hookConsoleLog();

  try {
    const result = eval(inputBox.value);

    if (result !== undefined) {
      outputBox.textContent += result + "\n";
    }

    if (!outputBox.textContent.trim()) {
      outputBox.textContent = "✓ Berhasil tanpa output";
    }
  } catch (err) {
    outputBox.textContent = "⚠️ Error: " + err.message;
  }

  unhook();
});

resetBtn.addEventListener("click", () => {
  inputBox.value = "";
  outputBox.textContent = "↺ Playground direset. Gas lagi!";
});

