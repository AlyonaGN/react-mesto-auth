export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
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