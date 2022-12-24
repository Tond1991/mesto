import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithRemove from "../components/ModalWithRemove.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationConfig,
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
  removeModal,
  editAvatarBtn,
  editAvatarModal,
  editAvatarForm
} from "../utils/constants.js";
import "./index.css";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-56",
  headers: {
    authorization: "cc5dda14-abf9-4f58-a45b-5d14df501467",
    "Content-Type": "application/json",
  },
});

let userId;


Promise.all([api.getUserInfo(), api.getInitialCard()])
.then(([user, cards]) => {
  userId = user._id;
    profileInfo.setUserInfo({
      username: user.name,
      profession: user.about,
      avatar: user.avatar
    });
    itemCreate.renderItems(cards.reverse())
})
.catch((err) => {
  console.log(err);
});

const modalOpenPhoto = new ModalWithImage(photoModal);
modalOpenPhoto.setEventListeners();

const onPhotoClick = (caption, image) => {
  modalOpenPhoto.openModal(caption, image);
};

const profileInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionSelector: ".profile__profession",
  avatarSelector: ".profile__image"
});

const profileModal = new ModalWithForm(editProfileModal, {
  handleSubmitForm: (formData) => {
    profileModal.loading(true);
    api.editProfile(formData).then((userData) => {
      profileInfo.setUserInfo({
        username: userData.name,
        profession: userData.about,
        avatar: userData.avatar,
      });
      profileModal.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileModal.loading(false);
    })
  },
});

profileModal.setEventListeners();

const openProfileModal = (modal) => {
 /* const { username, profession } = profileInfo.getUserInfo();
  profileModal.setInputValues({ username, profession });*/
  const { username, profession } = profileInfo.getUserInfo();
  nameInpt.value = username;
  professionInpt.value = profession;
  profileFormValidation.dissableBtn();
  modal.openModal();
};

editProfileBtn.addEventListener("click", () => {
  openProfileModal(profileModal);
});

const avatarModal = new ModalWithForm(editAvatarModal, {
  handleSubmitForm: (data) => {
    avatarModal.loading(true);
    api.editAvatar(data).then((userData) => {
      profileInfo.handleAvatar(userData);
      avatarModal.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarModal.loading(false);
    })
  }
})
avatarModal.setEventListeners();

const openAvatarModal = (modal) => {
  modal.openModal();
  avatarFormValidation.dissableBtn();
};
editAvatarBtn.addEventListener("click", () => {
openAvatarModal(avatarModal)
});



const removeModalBtn = new ModalWithRemove(removeModal);
removeModalBtn.setEventListeners();

const createCard = (data) => {
  const card = new Card(data, ".photo-item-template", onPhotoClick, userId, {
    handleRemoveBtn: () => {
      removeModalBtn.openModal(() => {
        api.deleteCard(data._id).then(() => {
          card.deleteCard();
          removeModalBtn.closeModal();
        })
      });
    },
  
    handleLike: (likes) => {
      if(!likes) {
        api.addLike(data._id).then((data) => {
          card.newLike(data)
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        api.deleteLike(data._id).then((data) => {
          card.newLike(data)
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
    
  });
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

const cardSubmit = new ModalWithForm(addNewCardModal, {
  handleSubmitForm: (formValues) => {
    cardSubmit.loading(true);
    api.addNewCard(formValues).then((data) => {
      itemCreate.addItem(
        createCard(data)
      );
      cardSubmit.closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardSubmit.loading(false);
    })
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
const avatarFormValidation = new FormValidator(validationConfig, editAvatarForm);


profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
avatarFormValidation.enableValidation();
