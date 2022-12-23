export default class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._profession = document.querySelector(professionSelector);
    this._avatar = document.querySelector(avatarSelector);

  }

  getUserInfo() {
    return {
      username: this._name.textContent,
      profession: this._profession.textContent,
    };
  }

  handleAvatar(formValue) {
    this._avatar.style.backgroundImage = `url(${formValue.avatar})`;
  }

  setUserInfo(formValue) {
    this._name.textContent = formValue.username;
    this._profession.textContent = formValue.profession;
    this.handleAvatar(formValue);
  }
}
