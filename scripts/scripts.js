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
const photoCardsTemplate = document.querySelector(".photo-cards");
const photoTemplate = document.querySelector("#photo-item-template").content.querySelector(".photo__cell");
const photoModal = document.querySelector(".modal_type_photo");


function openModal (modal, event) {
        modal.classList.add("modal_active");
};

function openProfileModal (event) {
    nameInpt.value = "Жак-Ив Кусто";
    professionInpt.value = "Исследователь океана";
    openModal(editProfileModal, event)
 };
 
 function openAddNewCard(event) {
   openModal(addNewCardModal, event)
 };


 function openPhotoModal (photoData, event) {
    document.querySelector(".modal__photo").src = photoData.link;
    document.querySelector(".modal__photo").alt = photoData.name;
    document.querySelector(".modal__caption").textContent = photoData.name;
    openModal(photoModal, event);
 };

function saveSubmitPop(event) {
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    event.preventDefault();
    editProfileModal.classList.remove("modal_active");
};

function closeModal (modal, event) {
        
       if (!modal.querySelector(".modal__content").contains(event.target) || event.target === modal.querySelector(".modal__close")) {
        modal.classList.remove("modal_active");
    }
};

function closeProfileModal (event) {
    closeModal(editProfileModal, event)
 };

 function closeNewCardModal  (event) {
    closeModal(addNewCardModal, event)
 };

 function closePhotoModal (event) {
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


const photoCards = (element) => {
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
    photoCardsTemplate.prepend(elementPhotoTemplate);
}

initialCards.forEach(photoCards); 

const saveCardSubmit = (event) => {
    event.preventDefault();
    
    photoCards({
        link: urlInpt.value,
        name: mestoInpt.value
    },);

    addNewCardModal.classList.remove("modal_active");
    clearInput();
};

const removePhotoCard = (element) => {
    element.remove();
}

const clearInput = () => {
    urlInpt.value = '',
    mestoInpt.value = '';
}



editProfileBtn.addEventListener("click", openProfileModal);
editProfileModal.addEventListener("click", closeProfileModal);
addNewCardBtn.addEventListener("click", openAddNewCard);
addNewCardModal.addEventListener("click", closeNewCardModal);
photoModal.addEventListener("click", closePhotoModal);
editProfileForm.addEventListener("submit", saveSubmitPop);
addNewCardForm.addEventListener("submit", saveCardSubmit);









