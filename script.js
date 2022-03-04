'use strict';
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnCloseModal = document.querySelector('.close-modal'),
  btnsOpenModal = document.querySelectorAll('.show-modal'),
  closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  },
  openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  e.key === 'Escape' && !modal.classList.contains('hidden') ? closeModal() : '';
});
