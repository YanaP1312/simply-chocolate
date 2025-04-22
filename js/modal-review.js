const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".review-btn");
const closeModalBtn = document.querySelector(".form-close-btn");

const openModal = () => {
  modalOverlay.classList.add("is-open");
  document.body.classList.add("no-scroll");
};

const closeModal = () => {
  modalOverlay.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  openModalBtn.blur();
};

function showToast(message, duration = 3000) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".modal-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showToast("Thank you for review!");
    closeModal();
    form.reset();
  });
});
