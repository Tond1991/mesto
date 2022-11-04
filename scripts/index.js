const editProfileBtn = document.querySelector(".profile__editing");
const modal = document.querySelector(".modal");
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
const photoTemplate = document.querySelector("#photo-item-template").content.querySelector(".photo__cell");
const photoModal = document.querySelector(".modal_type_photo");
const photoElementModal = document.querySelector(".modal__photo");
const captionElementModal = document.querySelector(".modal__caption");
const createCardButton = addNewCardModal.querySelector(validationConfig.submitButtonSelector);

function openModal(modal, event) {
    modal.classList.add("modal_active");
    document.addEventListener("keydown", keyClose)
};

function openProfileModal(event) {
    nameInpt.value = nameText.textContent;
    professionInpt.value = professionText.textContent;
    openModal(editProfileModal, event)
};

function openAddNewCard(event) {
    openModal(addNewCardModal, event)
   dissableBtn(createCardButton, validationConfig.inactiveButtonClass);
};


function openPhotoModal(photoData, event) {
    photoElementModal.src = photoData.link;
    photoElementModal.alt = photoData.name;
    captionElementModal.textContent = photoData.name;
    openModal(photoModal, event);
};

function saveSubmitPop(event) {
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    closeModalSubmit(editProfileModal, event);
};

function closeModalSubmit(modal) {
    modal.classList.remove("modal_active");
};

function closeModal(modal, event) {

    if (!modal.querySelector(".modal__content").contains(event.target) || event.target === modal.querySelector(".modal__close")) {
        modal.classList.remove("modal_active");
        document.removeEventListener("keydown", keyClose);
   }
};

function keyClose (event) {
    if (event.key === "Escape") {
        const modalActive = document.querySelector(".modal_active");
        modalActive.classList.remove("modal_active");
    }
}


function closeProfileModal(event) {
    closeModal(editProfileModal, event)
};

function closeNewCardModal(event) {
    closeModal(addNewCardModal, event)
};

function closePhotoModal(event) {
    closeModal(photoModal, event)
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


const createCard = (element) => {
    const elementPhotoTemplate = photoTemplate.cloneNode(true);
    const removePhotoCardBtn = elementPhotoTemplate.querySelector(".photo__delete");

    elementPhotoTemplate.querySelector(".photo__image").src = element.link;
    elementPhotoTemplate.querySelector(".photo__image").alt = element.name;
    elementPhotoTemplate.querySelector(".photo__title").textContent = element.name;
    elementPhotoTemplate.querySelector(".photo__icon").addEventListener("click", function (event) {
        event.target.classList.toggle("photo__icon_black");
    })

    elementPhotoTemplate.querySelector(".photo__image").addEventListener("click", (event) => openPhotoModal(element, event));
    removePhotoCardBtn.addEventListener("click", () => removePhotoCard(elementPhotoTemplate));
    return elementPhotoTemplate;
};

initialCards.forEach((element) => {
    photoCardsList.prepend(createCard(element));
});

const saveCardSubmit = (event) => {
    photoCardsList.prepend(createCard({
        link: urlInpt.value,
        name: mestoInpt.value
    }));
    closeModalSubmit(addNewCardModal, event);
    event.target.reset();
};

const removePhotoCard = (element) => {
    element.remove();
}

editProfileBtn.addEventListener("click", openProfileModal);
editProfileModal.addEventListener("click", closeProfileModal);
addNewCardBtn.addEventListener("click", openAddNewCard);
addNewCardModal.addEventListener("click", closeNewCardModal);
photoModal.addEventListener("click", closePhotoModal);
editProfileForm.addEventListener("submit", saveSubmitPop);
addNewCardForm.addEventListener("submit", saveCardSubmit);


