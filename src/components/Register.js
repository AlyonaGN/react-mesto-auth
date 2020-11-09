import React, { useCallback } from 'react';
import AuthirizationPage from './AuthirizationPage.js';

function Register({onUpdateAuthForm}) {

    const [formValues, setFormValues] = React.useState({
        email: "",
        password: ""
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        /* onUpdateAuthForm({
            email: formValues.userEmail,
            about: formValues.userPassword,
        }); */
    }, [onUpdateAuthForm, formValues]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    return (
        <AuthirizationPage title="Регистрация" name="signup" onSubmit={handleSubmit} >
        <label className="authentication__input">
          <input className="authentication__field authentication__field_email" value={formValues.userEmail} onChange={handleInputChange} type="text" name="userEmail" placeholder="Email" />
        </label>

        <label className="authentication__input">
          <input className="authentication__field authentication__field_password" value={formValues.userPassword} onChange={handleInputChange} type="password" name="userPassword" placeholder="Пароль" />
        </label>

        <button className="authentication__submit-button" onClick={handleSubmit} name="Зарегистрироваться">Зарегистрироваться</button>
        <span className="authentication__question-on-registration">Уже зарегистрированы? <a href="/sign-in" className="authentication__login-ref">Войти</a></span>
      </AuthirizationPage>
    );

}

export default Register;