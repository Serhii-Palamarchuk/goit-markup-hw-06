(() => {
  const actions = {
    openModalBtn: document.querySelector("[hamburger-menu-open]"),
    closeModalBtn: document.querySelector("[hamburger-menu-close]"),
    modal: document.querySelector("[hamburger-menu-backdrop]"),
  };

  actions.openModalBtn.addEventListener("click", toggleModal);
  actions.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    actions.modal.classList.toggle("is-open");
  }
})();