import { data } from "autoprefixer";

export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._headers,
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })    
    }

    getInitialCard() {
       return fetch(`${this._baseUrl}/cards`, {
            method: "GET",
            headers: this._headers,
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })
        
    }

    editProfile(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.profession
            })
        },
        )
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                link: data.url,
                name: data.mesto
            })
        },
        )
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        }) 
    }

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        }) 
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        }) 
    }

    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
        .then((res) => {
            if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((data) => {
            return data;
        })    
    }
}