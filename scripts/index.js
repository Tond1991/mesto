import { Card } from "./Card.js"
import { Validation } from "./Validation.js";
import { validationConfig, initialCards } from "./constants.js";


const editProfileBtn = document.querySelector(".profile__editing");
const addNewCardBtn = document.querySelector(".profile__button");
const editProfileModal = document.querySelector(".modal_type_profile");
const addNewCardModal = document.querySelector(".modal_type_add-new-card");
const profileContent = document.querySelector(".profile__content");
const nameText = profileContent.querySelector(".profile__name");
const professionText = profileContent.querySelector(".profile__profession");
const nameInpt = editProfileModal.querySelector(".modal__input_form_name");
const professionInpt = editProfileModal.querySelector(".modal__input_form_profession");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
const mestoInpt = addNewCardModal.querySelector(".modal__input_form_mesto");
const urlInpt = addNewCardModal.querySelector(".modal__input_form_url");
const photoCardsList = document.querySelector(".photo-cards");
const modals = document.querySelectorAll('.modal')
const photoModal = document.querySelector(".modal_type_photo");
const photoElementModal = document.querySelector(".modal__photo");
const captionElementModal = document.querySelector(".modal__caption");


function openModal(modal) {
    modal.classList.add("modal_active");
    document.addEventListener("keydown", handleEscape)
};

function openProfileModal() {
    nameInpt.value = nameText.textContent;
    professionInpt.value = professionText.textContent;
    profileFormValidation.dissableBtn();
    openModal(editProfileModal)
};

function openAddNewCard() {
    openModal(addNewCardModal)
        cardFormValidation.dissableBtn();

};

function openPhotoModal(photoLink, photoName) {
    photoElementModal.src = photoLink;
    photoElementModal.alt = photoName;
    captionElementModal.textContent = photoName;
    openModal(photoModal);
};

function handleProfileFormSubmit(event) {
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    closeModal(editProfileModal, event);
};

function closeModal(modal) {
    modal.classList.remove("modal_active");
    document.removeEventListener("keydown", handleEscape);

};

modals.forEach((modal) => {
    modal.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
            closeModal(modal)
        }
    })
})


function handleEscape(event) {
    if (event.key === "Escape") {
        const modalActive = document.querySelector(".modal_active");
        closeModal(modalActive);
    }
}




const createCard = (data) => {
    const card = new Card(data, ".photo-item-template", openPhotoModal);
    const cardElement = card.generateCard();

    return cardElement;
};

initialCards.forEach((data) => {
    photoCardsList.prepend(createCard(data));
});



const saveCardSubmit = (event) => {

    photoCardsList.prepend(createCard({
        link: urlInpt.value,
        name: mestoInpt.value
    }));
    closeModal(addNewCardModal, event);
    event.target.reset();
    cardFormValidation.dissableBtn();
};


editProfileBtn.addEventListener("click", openProfileModal);
addNewCardBtn.addEventListener("click", openAddNewCard);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
addNewCardForm.addEventListener("submit", saveCardSubmit);


const profileFormValidation = new Validation(validationConfig, editProfileForm);
const cardFormValidation = new Validation(validationConfig, addNewCardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
