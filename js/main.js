document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  function toggleHeaderShadow() {
    if (window.scrollY > 0) {
      header.classList.add("header-shadow");
    } else {
      header.classList.remove("header-shadow");
    }
  }

  toggleHeaderShadow();

  window.addEventListener("scroll", toggleHeaderShadow);

  const track = document.querySelector(".testimonials-track");
  const cards = track.querySelectorAll(".testimonial-card");

  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  function resetAnimation() {
    track.style.animation = "none";
    track.offsetHeight;
    track.style.animation = "scroll 30s linear infinite";
  }

  track.addEventListener("animationend", resetAnimation);

  const allCards = track.querySelectorAll(".testimonial-card");

  allCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      track.style.animationPlayState = "paused";
    });

    card.addEventListener("mouseleave", () => {
      track.style.animationPlayState = "running";
    });
  });
});
