const scrollBtn = document.querySelector(".hero-btm-down");
const nextSection = document.querySelector(".section-advantages");

scrollBtn.addEventListener("click", (event) => {
  event.preventDefault();
  nextSection.scrollIntoView({
    behavior: "smooth",
  });
});
