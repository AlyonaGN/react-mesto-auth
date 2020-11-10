import React, { useCallback } from 'react';
import AuthenticationPage from './AuthenticationPage.js';

function Login() {

    const [formValues, setFormValues] = React.useState({
        email: "",
        password: ""
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
    /*     onUpdateAuthForm({
            email: formValues.userEmail,
            password: formValues.userPassword,
        }); */
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    return (
      <AuthenticationPage title="Вход" name="login" onSubmit={handleSubmit} >
        <label className="authentication__input">
          <input className="authentication__field authentication__field_email" value={formValues.email} onChange={handleInputChange} type="text" name="userEmail" placeholder="Email" />
        </label>

        <label className="authentication__input">
          <input className="authentication__field authentication__field_password" value={formValues.password} onChange={handleInputChange} type="password" autoComplete="on" name="userPassword" placeholder="Пароль" />
        </label>

        <button className="authentication__submit-button" type="submit" name="Войти">Войти</button>
      </AuthenticationPage>
    );

}

export default Login;