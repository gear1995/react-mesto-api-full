export class Api {
  constructor(options) {
    this._host = options.host;
    //this._token = options.token;
    this._getHeaders = this._getHeaders.bind(this);
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._host}/cards`, {
      method: 'GET',
      credentials: "include",
      headers: this._getHeaders(),
    }).then(this._checkServerResponse);
  }

  _getHeaders() {
    return {
      //authorization: this._token,
      "content-type": "application/json",
    };
  }

  postCard(data) {
    return fetch(`${this._host}/cards`, {
      method: "POST",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkServerResponse);
  }

  getUserInfo() {
    return fetch(`${this._host}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._getHeaders(),
    }).then(this._checkServerResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._host}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkServerResponse);
  }
  deleteCard(id) {
    return fetch(`${this._host}/cards/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._getHeaders(),
    }).then(this._checkServerResponse);
  }

  setLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: "PUT",
      credentials: "include",
      headers: this._getHeaders(),
    }).then(this._checkServerResponse);
  }

  deleteLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: "DELETE",
      credentials: "include",
      headers: this._getHeaders(),
    }).then(this._checkServerResponse);
  }

  changeLikeCard(id, isLiked) {
    if (isLiked) {
      return this.setLike(id);
    } else {
      return this.deleteLike(id);
    }
  }

  updateAvatar(data) {
    return fetch(`${this._host}/users/me/avatar`, {
      method: "PATCH",
      credentials: "include",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkServerResponse);
  }
}

export const api = new Api({
  host: "https://api.gear1995v.students.nomoredomains.work",
  //token: "2b5dd042-b3e6-48bb-820c-257c3546a5a1",
});

export default api;
