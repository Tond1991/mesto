const openModalBtn = document.querySelector(".profile__editing");
const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal__content");
const closeModalBtn = modal.querySelector(".modal__close");
const profileContent = document.querySelector(".profile__content");
const nameText = profileContent.querySelector(".profile__name");
const professionText = profileContent.querySelector(".profile__profession");
const nameInpt = modal.querySelector(".modal__input_name");
const professionInpt = modal.querySelector(".modal__input_profession");

function openPop (event) {
    modal.classList.add("modal_active");
    nameInpt.value = "Жак-Ив Кусто";
    professionInpt.value = "Исследователь океана";
};

function savePop (event) {
 
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
modal.addEventListener("submit", savePop); 









