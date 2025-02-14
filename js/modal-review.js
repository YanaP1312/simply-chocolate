const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".review-btn");
const closeModalBtn = document.querySelector(".form-close-btn");

const openModal = () => {
  modalOverlay.classList.add("is-open");
};

const closeModal = () => {
  modalOverlay.classList.remove("is-open");
  openModalBtn.blur();
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
