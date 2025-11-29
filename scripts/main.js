// nav toggle for small screens
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('open');
});

// simple slider
(function () {
  const slider = document.getElementById('slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slides img');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let idx = 0;

  function show(i) {
    slides.forEach((s, si) => s.classList.toggle('active', si === i));
  }
  show(idx);

  prev.addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });

  next.addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });

  // autoplay
  let autoplay = true;
  if (autoplay) {
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, 5000);
  }
})();

// ANCIENT MODE (safe version)
document.addEventListener("DOMContentLoaded", () => {
  const ancientBtn = document.getElementById("ancient-toggle");
  if (ancientBtn) {
    ancientBtn.addEventListener("click", () => {
      document.body.classList.toggle("ancient-mode");
    });
  }
});
