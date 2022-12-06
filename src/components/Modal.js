export default class Modal {
    constructor(modalSelector) {
    this._modalSelector = modalSelector;
    }

    openModal() {
        this._modalSelector.classList.add("modal_active");
        document.addEventListener("keydown", this._handleEscClose);
    }

    closeModal() {
        this._modalSelector.classList.remove("modal_active");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.closeModal();
        }
    }

    setEventListeners() {
           this._modalSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('modal') || evt.target.classList.contains('modal__close')) {
                this.closeModal();
            }
        })
    }
}