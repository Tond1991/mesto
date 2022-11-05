const showInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (inputElement, errorElement, inputErrorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';

}

const dissableBtn = (buttonElement, buttonElementDisabled) => {
  buttonElement.classList.add(buttonElementDisabled);
  buttonElement.disabled = true;
}

const enableBtn = (buttonElement, buttonElementDisabled) => {
  buttonElement.classList.remove(buttonElementDisabled);
  buttonElement.disabled = false;

}

const toggleButtonState = (buttonElement, buttonElementDisabled, buttonState) => {
  if (buttonState) {
    dissableBtn(buttonElement, buttonElementDisabled);
  } else {
    enableBtn(buttonElement, buttonElementDisabled);
  }
}



const checkInputValidity = (inputElement, errorElement, inputErrorClass) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, inputErrorClass);
  } else {
    showInputError(inputElement, errorElement, inputErrorClass);
  }
}

const hasInvalidInput = (inputs) =>  inputs.some((input) => !input.validity.valid);

const handleFormInput = (evt, form, inputErrorClass, submitButton, disabledSubmitButtonClass, inputs) => {
  const inputElement = evt.target;
  const errorElement = form.querySelector(`.modal__error-${inputElement.name}`);
  checkInputValidity(inputElement, errorElement, inputErrorClass);
  const buttonState = hasInvalidInput(inputs);

  toggleButtonState(submitButton, disabledSubmitButtonClass, buttonState);
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
}

const setEventListeners = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButtonElement = form.querySelector(config.submitButtonSelector);

    form.addEventListener("submit", handleFormSubmit);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => handleFormInput(evt, form, config.inputErrorClass, submitButtonElement,  config.inactiveButtonClass, inputs))
    })

   /toggleButtonState(submitButtonElement, config.inactiveButtonClass, true);

    form.addEventListener('reset', () => {
      setTimeout(() => {
         toggleButtonState(submitButtonElement, config.inactiveButtonClass, true);
      }, 0); 
    });
}

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => setEventListeners(form, config))
}

enableValidation(validationConfig);