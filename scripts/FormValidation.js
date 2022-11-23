export class FormValidation {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._config = config;
    }


    _showInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = '';

    }

    _dissableBtn = (buttonElement, buttonElementDisabled) => {
        buttonElement.classList.add(buttonElementDisabled);
        buttonElement.disabled = true;
    }

    _enableBtn = (buttonElement, buttonElementDisabled) => {
        buttonElement.classList.remove(buttonElementDisabled);
        buttonElement.disabled = false;

    }



    _checkInputValidity = (inputElement, errorElement, inputErrorClass) => {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement, inputErrorClass);
        } else {
            this._showInputError(inputElement, errorElement, inputErrorClass);
        }
    }

    _hasInvalidInput = (inputs) => inputs.some((input) => !input.validity.valid);


    _handleFormInput = (evt, formElement, inputErrorClass, submitButton, disabledSubmitButtonClass, inputs) => {
        const inputElement = evt.target;
        const errorElement = formElement.querySelector(`.modal__error-${inputElement.name}`);
        this._checkInputValidity(inputElement, errorElement, inputErrorClass);
        const buttonState = this._hasInvalidInput(inputs);

        this.toggleButtonState(submitButton, disabledSubmitButtonClass, buttonState);
    }

    _handleFormSubmit = (evt) => {
        evt.preventDefault();
    }

    _setEventListeners = () => {
        const inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);

        this._formElement.addEventListener("submit", this._handleFormSubmit);
        inputs.forEach((inputElement) => {
            inputElement.addEventListener("input", (evt) => this._handleFormInput(evt, this._formElement, this._config.inputErrorClass, submitButtonElement, this._config.inactiveButtonClass, inputs))
        })

        this.toggleButtonState(submitButtonElement, this._config.inactiveButtonClass, true);

        this._formElement.addEventListener('reset', () => {
            setTimeout(() => {
                toggleButtonState(submitButtonElement, this._config.inactiveButtonClass, true);
            }, 0);
        });
    }

    toggleButtonState = (buttonElement, buttonElementDisabled, buttonState) => {
        if (buttonState) {
            this._dissableBtn(buttonElement, buttonElementDisabled);
        } else {
            this._enableBtn(buttonElement, buttonElementDisabled);
        }
    }

    enableValidation = () => {
        this._setEventListeners()
    }


}