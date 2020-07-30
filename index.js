const editButton = document.querySelector('.profile__info_rectangle');
const closeButton = document.querySelector('.popup__close');
const modal = document.querySelector('.popup');
const form = document.querySelector('.form');

function toggleModal(){
  modal.classList.toggle('.popup_opened');
}


editButton.addEventListener('click', toggleModal);
  
closeButton.addEventListener('click', toggleModal);

form.addEventListener('submit', (e) => {
  e.preventDefault();
})



