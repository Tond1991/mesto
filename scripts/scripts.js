const openModalBtn = document.querySelector(".profile__editing");
const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal__content");
const closeModalBtn = modal.querySelector(".modal__close");
const saveModalBtn = modal.querySelector(".modal__save");
const profileContent = document.querySelector(".profile__content");
const nameText = profileContent.querySelector(".profile__name");
const professionText = profileContent.querySelector(".profile__profession");
const nameInpt = modal.querySelector(".modal__name");
const professionInpt = modal.querySelector(".modal__profession");
const likeBtn = document.querySelectorAll(".photo__icon");

openModalBtn.addEventListener("click", function (event) {
    modal.classList.add("modal_active");
    nameInpt.value = "Жак-Ив Кусто";
    professionInpt.value = "Исследователь океана";
});

modal.addEventListener("click", function(event) {
    if(!modalContent.contains(event.target) || event.target === closeModalBtn) {
        modal.classList.remove("modal_active");
    }
});

nameText.textContent = "Жак-Ив Кусто";
professionText.textContent = "Исследователь океана";

modal.addEventListener("submit", function(event) {
 
    nameText.textContent = nameInpt.value;
    professionText.textContent = professionInpt.value;
    event.preventDefault();
    modal.classList.remove("modal_active");

}); 









