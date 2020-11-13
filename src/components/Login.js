import React, { useCallback } from 'react';
import AuthenticationPage from './AuthenticationPage.js';
import { login } from './Authentication.js';

function Login({onLogin}) {
    const [formValues, setFormValues] = React.useState({
        email: "",
        password: ""
    });

    const handleSubmit = useCallback((e) => {
      e.preventDefault();
      login(formValues.password, formValues.email)
        .then((res) => {
          console.log(res);   
          if (res) {
            console.log(res);
            onLogin();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, [formValues, onLogin]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    return (
      <AuthenticationPage title="Вход" name="login" onSubmit={handleSubmit} >
        <label className="authentication__input">
          <input className="authentication__field authentication__field_email" value={formValues.email} onChange={handleInputChange} type="text" name="email" placeholder="Email" />
        </label>

        <label className="authentication__input">
          <input className="authentication__field authentication__field_password" value={formValues.password} onChange={handleInputChange} type="password" autoComplete="on" name="password" placeholder="Пароль" />
        </label>

        <button className="authentication__submit-button" type="submit" name="Войти">Войти</button>
      </AuthenticationPage>
    );

}

export default Login;