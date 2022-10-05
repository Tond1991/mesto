const openModalBtn = document.querySelector(".profile__editing");
const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal__content");
const closeModalBtn = modal.querySelector(".modal__close");
const profileContent = document.querySelector(".profile__content");
const nameText = profileContent.querySelector(".profile__name");
const professionText = profileContent.querySelector(".profile__profession");
const nameInpt = modal.querySelector(".modal__input_form_name");
const professionInpt = modal.querySelector(".modal__input_form_profession");
const modalForm = modal.querySelector(".modal__form");
let likeBtn = document.querySelectorAll(".photo__icon");


function openPop (event) {
    modal.classList.add("modal_active");
    nameInpt.value = "Жак-Ив Кусто";
    professionInpt.value = "Исследователь океана";
};

function saveSubmitPop (event) {
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    event.preventDefault();
    modal.classList.remove("modal_active");

};

function closePop (event) {
    if(!modalContent.contains(event.target) || event.target === closeModalBtn) {
        modal.classList.remove("modal_active");
    }
};

openModalBtn.addEventListener("click", openPop);
modal.addEventListener("click", closePop);
modalForm.addEventListener("submit", saveSubmitPop); 


for (let index = 0; index < likeBtn.length; index++) {
    likeBtn[index].addEventListener("click", function () {
        likeBtn[index].classList.toggle("photo__icon_black");
    });
}







