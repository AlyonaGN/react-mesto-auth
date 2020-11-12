import { ROUTES_MAP } from "../utils/routesMap";
import { setToken } from "../utils/token";

export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email) => {
    return fetch(`${BASE_URL}${ROUTES_MAP.SIGNUP}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then((response) => {
                if (response.status === 201){
                  return response.json();
                }
                else {
                    console.log(response);
                    return;
                }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
};

export const login = (password, email) => {
    return fetch(`${BASE_URL}${ROUTES_MAP.SIGNIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(response => response.json())
    .then((data) => {
      if (data.token){
        setToken(data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
  };
  
  export const getContent = (token) => {
    return fetch(`${BASE_URL}${ROUTES_MAP.USER_INFO}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((response) => {
        return response.json();
    })
    .catch(err => console.log(err))
  };
  