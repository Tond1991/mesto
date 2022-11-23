export class Validation {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._config = config;
        this._inputs = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._submitButtonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        this._inputErrorClass = config.inputErrorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;

    }


    _showInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError = (inputElement, errorElement, inputErrorClass) => {
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = '';

    }

    dissableBtn = () => {
        this._submitButtonElement.classList.add(this._inactiveButtonClass);
        this._submitButtonElement.disabled = true;
    }

    _enableBtn = () => {
        this._submitButtonElement.classList.remove(this._inactiveButtonClass);
        this._submitButtonElement.disabled = false;

    }

    _checkInputValidity = (inputElement, errorElement, inputErrorClass) => {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement, errorElement, inputErrorClass);
        } else {
            this._showInputError(inputElement, errorElement, inputErrorClass);
        }
    }

    _hasInvalidInput = () => this._inputs.some((input) => !input.validity.valid);



    _handleFormInput = (evt) => {
        const inputElement = evt.target;
        const errorElement = this._formElement.querySelector(`.modal__error-${inputElement.name}`);
        this._checkInputValidity(inputElement, errorElement, this._inputErrorClass);
        this._toggleButtonState();
    }

    _handleFormSubmit = (evt) => {
        evt.preventDefault();
    }

    _setEventListeners = () => {
        this._formElement.addEventListener("submit", this._handleFormSubmit);
        this._inputs.forEach((inputElement) => {
            inputElement.addEventListener("input", (evt) => this._handleFormInput(evt))
        })
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this.dissableBtn();
        } else {
            this._enableBtn();
        }
    }

    enableValidation = () => {
        this._setEventListeners()
    }


}
