const validationConfig = {
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    submitButtonSelector: '.modal__save',
    inactiveButtonClass: 'modal__save_disabled',
    inputErrorClass: 'modal__input_type_error',
    errorClass: 'modal__error_visible'
};

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
];
const editProfileBtn = document.querySelector(".profile__editing");
const addNewCardBtn = document.querySelector(".profile__button");
const photoElementModal = document.querySelector(".modal__photo");
const captionElementModal = document.querySelector(".modal__caption");
const profileContent = document.querySelector(".profile__content");
const photoModal = document.querySelector(".modal_type_photo");
const editProfileModal = document.querySelector(".modal_type_profile");
const addNewCardModal = document.querySelector(".modal_type_add-new-card");
const nameInpt = editProfileModal.querySelector(".modal__input_form_name");
const professionInpt = editProfileModal.querySelector(".modal__input_form_profession");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
const photoCardsList = document.querySelector(".photo-cards");



export { validationConfig, 
    initialCards, 
    editProfileBtn, 
    addNewCardBtn, 
    editProfileModal, 
    addNewCardModal, 
    photoElementModal, 
    captionElementModal, 
    photoModal,
    nameInpt,
    professionInpt,
      photoCardsList,
    editProfileForm,
    addNewCardForm
};
