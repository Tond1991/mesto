import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import { validationConfig, 
    initialCards, 
    photoModal, 
    editProfileBtn, 
    addNewCardBtn, 
    editProfileModal, 
    addNewCardModal } from "../utils/constants.js";
import './index.css';



const profileContent = document.querySelector(".profile__content");
const nameText = profileContent.querySelector(".profile__name");
const professionText = profileContent.querySelector(".profile__profession");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
const mestoInpt = addNewCardModal.querySelector(".modal__input_form_mesto");
const urlInpt = addNewCardModal.querySelector(".modal__input_form_url");
const photoCardsList = document.querySelector(".photo-cards");
const modals = document.querySelectorAll('.modal')


/*
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
};*/

const openPhotoModal = new ModalWithImage(photoModal);
openPhotoModal.setEventListeners();

const onPhotoClick = (caption, image) => {
    openPhotoModal.openModal(caption, image)
}
/*
function handleProfileFormSubmit(event) {
    event.preventDefault();
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    closeModal(editProfileModal, event);
};

function closeModal(modal) {
    modal.classList.remove("modal_active");
    document.removeEventListener("keydown", handleEscape);

};*/

/*modals.forEach((modal) => {
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
}*/

const createItem = new Section({
    items: initialCards,
    renderer: (item) => {

        const card = new Card(item, ".photo-item-template", onPhotoClick);
        const cardElement = card.generateCard();
        createItem.addItem(cardElement);
    }
}, photoCardsList);

createItem.renderItems();

/*const createCard = (data) => {
    const card = new Card(data, ".photo-item-template", onPhotoClick);
    const cardElement = card.generateCard();

    return cardElement;
};*/


const createCard = (data) => {
    const card = new Card(data, ".photo-item-template", openPhotoModal);
    const cardElement = card.generateCard();

    return cardElement;
};
/*
initialCards.forEach((data) => {
    photoCardsList.prepend(createCard(data));
});*/



/*const saveCardSubmit = (event) => {
    event.preventDefault();
    photoCardsList.prepend(createCard({
        link: urlInpt.value,
        name: mestoInpt.value
    }));
    closeModal(addNewCardModal, event);
    event.target.reset();
    cardFormValidation.dissableBtn();
};*/

const saveCardSubmit = new ModalWithForm(addNewCardModal, {handleSubmitForm: (formValues) => {
    createItem.addItem(createCard({
        link: formValues.url,
        name: formValues.mesto

    }));
    saveCardSubmit.closeModal();
}});
saveCardSubmit.setEventListeners();



//editProfileBtn.addEventListener("click", openProfileModal);
addNewCardBtn.addEventListener("click", () => {
    saveCardSubmit.openModal();
    cardFormValidation.dissableBtn();

});
//editProfileForm.addEventListener("submit", handleProfileFormSubmit);
//addNewCardForm.addEventListener("submit", saveCardSubmit);


const profileFormValidation = new FormValidator(validationConfig, editProfileForm);
const cardFormValidation = new FormValidator(validationConfig, addNewCardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();

