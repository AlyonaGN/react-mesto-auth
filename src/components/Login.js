import React, { useCallback } from 'react';
import AuthirizationPage from './AuthirizationPage.js';

function Login({onUpdateAuthForm}) {

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
        <AuthirizationPage title="Вход" name="login" onSubmit={handleSubmit} >
        <label className="authorization__input">
          <input className="authorization__field authorization__field_email" value={formValues.userEmail} onChange={handleInputChange} type="text" name="userEmail" placeholder="Email" />
        </label>

        <label className="authorization__input">
          <input className="authorization__field authorization__field_password" value={formValues.userPassword} onChange={handleInputChange} type="text" name="userPassword" placeholder="Пароль" />
        </label>

        <button className="authorization__submit-button" onClick={handleSubmit} name="Войти">Войти</button>
      </AuthirizationPage>
    );

}

export default Login;