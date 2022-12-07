export default class Card {
  constructor(data, templateSelector, onPhotoClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._onPhotoClick = onPhotoClick;
  }

  _getTemplate() {
    const photoTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo__cell")
      .cloneNode(true);
    return photoTemplate;
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _likeToggle() {
    this._likeBtn.classList.toggle("photo__icon_black");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._removeBtn = this._element.querySelector(".photo__delete");
    this._likeBtn = this._element.querySelector(".photo__icon");
    this._elementImg = this._element.querySelector(".photo__image");
    this._elementText = this._element.querySelector(".photo__title");
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementText.textContent = this._name;
    this._setListeners();
    return this._element;
  }

  _handlePhotoClick = () => {
    this._onPhotoClick(this._link, this._name);
  };

  _setListeners() {
    this._removeBtn.addEventListener("click", () => {
      this._deleteCard();
    });

    this._likeBtn.addEventListener("click", () => {
      this._likeToggle();
    });

    this._elementImg.addEventListener("click", this._handlePhotoClick);
  }
}
