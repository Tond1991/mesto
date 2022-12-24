const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};


const editProfileBtn = document.querySelector(".profile__editing");
const addNewCardBtn = document.querySelector(".profile__button");
const photoModal = document.querySelector(".modal_type_photo");
const removeModal = document.querySelector(".modal_type_delete-card");
const editAvatarModal = document.querySelector(".modal_type_edit-avatar");
const editProfileModal = document.querySelector(".modal_type_profile");
const addNewCardModal = document.querySelector(".modal_type_add-new-card");
const nameInpt = editProfileModal.querySelector(".modal__input_form_name");
const professionInpt = editProfileModal.querySelector(
  ".modal__input_form_profession"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const addNewCardForm = addNewCardModal.querySelector(".modal__form");
const editAvatarForm = editAvatarModal.querySelector(".modal__form");
const photoCardsList = document.querySelector(".photo-cards");
const editAvatarBtn = document.querySelector(".profile__image");

export {
  validationConfig,
  editProfileBtn,
  addNewCardBtn,
  editProfileModal,
  addNewCardModal,
  photoModal,
  nameInpt,
  professionInpt,
  photoCardsList,
  editProfileForm,
  addNewCardForm,
  removeModal,
  editAvatarBtn,
  editAvatarModal,
  editAvatarForm
};
