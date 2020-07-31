const editButton = document.querySelector('.profile__info_rectangle');
const closeButton = document.querySelector('.popup__close_image');
const modal = document.querySelector('.popup');
const form = document.querySelector('.form');
const addProfileModal = document.querySelector('.popup_opened');
const profileName = document.querySelector('.profile__info_name');
const profileOccupation = document.querySelector('.profile__info_subname');
const submitButton = document.querySelector('.popup__submit-button');
const inputName = document.querySelector('.form__input_name');
const inputOccupation = document.querySelector('.form__input_aboutme');

function toggleModal(){
  modal.classList.toggle('popup_opened');
}


editButton.addEventListener('click', () => {
  toggleModal();
});
  
closeButton.addEventListener('click', () => {
  toggleModal();
});

submitButton.addEventListener('click',() => {
  toggleModal();
})


form.addEventListener('submit', (e) => {
  e.preventDefault();



profileName.textContent = inputName.value;
profileOccupation.textContent = inputOccupation.value;


toggleModal();

})


