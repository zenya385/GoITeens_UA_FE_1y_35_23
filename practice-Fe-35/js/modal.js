    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    window.addEventListener("click", onBackdropClick); // реалізація функції onBackdropClick
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  
  //   Функція для закриття модалки по кліку на бекдроп
   function onBackdropClick(e) {
      if (e.target == refs.modal) {
          refs.modal.classList.toggle("is-hidden");
          document.body.classList.toggle("no-scroll");
      }}
  
