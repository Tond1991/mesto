import Modal from "./Modal.js";
import { photoElementModal, captionElementModal } from "../utils/constants.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
  }

  openModal(image, caption) {
    photoElementModal.src = image;
    photoElementModal.alt = caption;
    captionElementModal.textContent = caption;
    super.openModal();
  }
}
