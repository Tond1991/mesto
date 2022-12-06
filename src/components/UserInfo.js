export default class UserInfo {
    constructor({nameSelector, professionSelector}) {
        this._name = document.querySelector(nameSelector);
        this._profession = document.querySelector(professionSelector);
    }

     getUserInfo() {
        return {
            username: this._name.textContent,
            profession: this._profession.textContent
        }
    }

    setUserInfo({username, profession}) {
        this._name.textContent = username;
        this._profession.textContent = profession;
    }
}
