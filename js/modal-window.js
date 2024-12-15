(() => {
  const actions = {
    openModalBtn: document.querySelector("[modal-window-open]"),
    closeModalBtn: document.querySelector("[modal-window-close]"),
    modal: document.querySelector("[modal-window-backdrop]"),
  };

  actions.openModalBtn.addEventListener("click", toggleModal);
  actions.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    actions.modal.classList.toggle("is-open");
  }
})();