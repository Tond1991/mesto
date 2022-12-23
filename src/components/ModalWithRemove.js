import Modal from "./Modal.js";

export default class ModalWithRemove extends Modal {
    constructor(modalSelector) {
        super(modalSelector);
        this._modalForm = modalSelector.querySelector(".modal__form");
    }

    openModal(onRemove) {
        super.openModal();
        this._onRemove = onRemove;
    }

    setEventListeners() {
        super.setEventListeners();
        this._modalForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._onRemove();
        })
    }
}