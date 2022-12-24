import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, { handleSubmitForm }) {
    super(modalSelector);
    this._modalForm = modalSelector.querySelector(".modal__form");
    this._handleSubmitForm = handleSubmitForm;
    this._input = Array.from(
      this._modalSelector.querySelectorAll(".modal__input")
    );
  }

  _getInputValues() {
    const formValues = {};
    this._input.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  loading(isLoading) {
    if(isLoading) {
      this._modalBtn.textContent = "Сохранение...";
    } else {
      this._modalBtn.textContent = "Сохраненить";
    }
  }

  setInputValues(data) {
    this._input.forEach((input) => {
      input.value = data[input.name];
    });
  }

  closeModal() {
    super.closeModal();
    this._modalForm.reset();
  }
  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
    super.setEventListeners();
  }
}
