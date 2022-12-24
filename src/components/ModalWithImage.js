import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._image = document.querySelector(".modal__photo");
    this._caption = document.querySelector(".modal__caption");
  }

  openModal(image, caption) {
    this._image.src = image;
    this._image.alt = caption;
    this._caption.textContent = caption;
    super.openModal();
  }
}
