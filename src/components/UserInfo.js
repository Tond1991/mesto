import {    nameInpt,
          professionInpt
 } from "../utils/constants.js";


export default class UserInfo {
    constructor({name, profession}) {
        this._name = name;
        this._profession = profession;
    }

   /* getUserInfo() {
        return {
            this._name,
            this._profession,
        }
    }*/

    setUserInfo() {
        this._name.textContent = nameInpt.value;
        this._profession.textContent = professionInpt.value;
    }
}