import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationConfig,
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
  addNewCardForm,
} from "../utils/constants.js";
import "./index.css";

const modalOpenPhoto = new ModalWithImage(photoModal);
modalOpenPhoto.setEventListeners();

const onPhotoClick = (caption, image) => {
  modalOpenPhoto.openModal(caption, image);
};

const profileInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionSelector: ".profile__profession",
});

const profileModal = new ModalWithForm(editProfileModal, {
  handleSubmitForm: (data) => {
    profileInfo.setUserInfo({
      username: data.name,
      profession: data.profession,
    });
  },
});

profileModal.setEventListeners();

const openProfileModal = (modal) => {
  const { username, profession } = profileInfo.getUserInfo();
  nameInpt.value = username;
  professionInpt.value = profession;
  profileFormValidation.dissableBtn();
  modal.openModal();
};

editProfileBtn.addEventListener("click", () => {
  openProfileModal(profileModal);
});

const createCard = (data) => {
  const card = new Card(data, ".photo-item-template", onPhotoClick);
  const cardElement = card.generateCard();

  return cardElement;
};

const itemCreate = new Section(
  {
    renderer: (item) => {
      itemCreate.addItem(createCard(item));
    },
  },
  photoCardsList
);

itemCreate.renderItems(initialCards);

const cardSubmit = new ModalWithForm(addNewCardModal, {
  handleSubmitForm: (formValues) => {
    itemCreate.addItem(
      createCard({
        link: formValues.url,
        name: formValues.mesto,
      })
    );
  },
});
cardSubmit.setEventListeners();

addNewCardBtn.addEventListener("click", () => {
  cardSubmit.openModal();
  cardFormValidation.dissableBtn();
});

const profileFormValidation = new FormValidator(
  validationConfig,
  editProfileForm
);
const cardFormValidation = new FormValidator(validationConfig, addNewCardForm);

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
