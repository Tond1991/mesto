import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { validationConfig, 
    initialCards, 
    photoModal, 
    editProfileBtn, 
    addNewCardBtn, 
    editProfileModal, 
    addNewCardModal,
    nameInpt,
    professionInpt,
    photoCardsList,
    editProfileForm,
    addNewCardForm
} from "../utils/constants.js";
import './index.css';

const openPhotoModal = new ModalWithImage(photoModal);
openPhotoModal.setEventListeners();

const onPhotoClick = (caption, image) => {
    openPhotoModal.openModal(caption, image)
}

const profileInfo = new UserInfo({
    nameSelector: ".profile__name", 
    professionSelector: ".profile__profession"
})

const profileModal = new ModalWithForm(editProfileModal, {
    handleSubmitForm: (data) => {
        profileInfo.setUserInfo({
            username: data.name,
            profession: data.profession  
});
    profileModal.closeModal();
    }});

    profileModal.setEventListeners();

    const openProfileModal = (modal) => {
        const {username, profession} = profileInfo.getUserInfo();
        nameInpt.value = username;
        professionInpt.value = profession;
        profileFormValidation.dissableBtn();
        modal.openModal();
        }

    editProfileBtn.addEventListener("click", () => {
        openProfileModal(profileModal)
    });


const createCard = (data) => {
    const card = new Card(data, ".photo-item-template", onPhotoClick);
    const cardElement = card.generateCard();

    return cardElement;
};

const createItem = new Section({
    items: initialCards,
    renderer: (item) => {

        createItem.addItem(createCard(item));
    }
}, photoCardsList);

createItem.renderItems();



const saveCardSubmit = new ModalWithForm(addNewCardModal, {handleSubmitForm: (formValues) => {
    createItem.addItem(createCard({
        link: formValues.url,
        name: formValues.mesto

    }));
    saveCardSubmit.closeModal();
}});
saveCardSubmit.setEventListeners();



addNewCardBtn.addEventListener("click", () => {
    saveCardSubmit.openModal();
    cardFormValidation.dissableBtn();

});


const profileFormValidation = new FormValidator(validationConfig, editProfileForm);
const cardFormValidation = new FormValidator(validationConfig, addNewCardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();

