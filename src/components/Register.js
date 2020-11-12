import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_MAP } from '../utils/routesMap.js';
import { register } from './Authentication.js';
import AuthenticationPage from './AuthenticationPage.js';

function Register({ onSubmitRegister, setRegSuccessfull}) {
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: ""
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    register(formValues.password, formValues.email)
      .then((res) => {
        if (res) {
          console.log(res);
          setRegSuccessfull();
        }
      })
      .then(() => {
        onSubmitRegister();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [formValues, onSubmitRegister, setRegSuccessfull]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  }, [setFormValues]);

  return (
    <AuthenticationPage title="Регистрация" name="signup" onSubmit={handleSubmit} >
      <label className="authentication__input">
        <input className="authentication__field authentication__field_email" value={formValues.email} onChange={handleInputChange} type="text" name="email" placeholder="Email" />
      </label>

      <label className="authentication__input">
        <input className="authentication__field authentication__field_password" value={formValues.password} onChange={handleInputChange} type="password" autoComplete="on" name="password" placeholder="Пароль" />
      </label>

      <button className="authentication__submit-button" type="submit" name="Зарегистрироваться">Зарегистрироваться</button>
      <span className="authentication__question-on-registration">Уже зарегистрированы? <Link to={ROUTES_MAP.SIGNIN} className="authentication__login-ref">Войти</Link></span>
    </AuthenticationPage>
  );

}

export default Register;