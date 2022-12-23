export default class Card {
  constructor(data, templateSelector, onPhotoClick, userId, api, {handleRemoveBtn}) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._onPhotoClick = onPhotoClick;
    this._api = api;
    this._id = data._id;
    this._likes = data.likes;
    this._handleRemoveBtn = handleRemoveBtn;

  }

  _getTemplate() {
    const photoTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo__cell")
      .cloneNode(true);
    return photoTemplate;
  }

  deleteCard() {
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
    this._likeCounter = this._element.querySelector(".photo__icon-counter");
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementText.textContent = this._name;

      if(this._ownerId !== this._userId) {
        this._removeBtn.style.display = 'none';
      }

      this._likeCounter.textContent = this._likes.length;

      if(this._likes.some(like => like._id === this._userId)) {
        this._likeBtn.classList.add("photo__icon_black");
      }
    this._setListeners();
    return this._element;
  }

  _handleLike() {
    if(!(this._likeBtn.classList.contains("photo__icon_black"))) {
      this._api.addLike(this._id)
      .then((data) => {
        this._likeBtn.classList.add("photo__icon_black");
        this._likeCounter.textContent = data.likes.length;
      })
    } else {
      this._api.deleteLike(this._id)
      .then((data) => {
        this._likeBtn.classList.remove("photo__icon_black");
        this._likeCounter.textContent = data.likes.length;
      })
    }
  }
  

  _handlePhotoClick = () => {
    this._onPhotoClick(this._link, this._name);
  };

  _setListeners() {
    this._removeBtn.addEventListener("click", () => {
      this._handleRemoveBtn();
    });

    this._likeBtn.addEventListener("click", () => {
      this._handleLike();
    });

    this._elementImg.addEventListener("click", this._handlePhotoClick);
  }
}
