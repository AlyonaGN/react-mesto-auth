import React from 'react';
import { withRouter } from 'react-router-dom';
import logoPath from '../images/header-logo.png';

function Header(props) {
  console.log(props);
  const locationPathname = props.location.pathname;
  const signinPath = "/sign-in";
  const signupPath = "/sign-up";

  return (
      <header className="header page__header">
        <img className="header__logo" src={logoPath} alt="здесь должен быть логотип, но что-то пошло не так" />
          <a href={(locationPathname === signinPath && signupPath) || (locationPathname === signupPath && signinPath)} className="header__link">
            {
              (locationPathname === signupPath && "Войти") ||
              (locationPathname === signinPath && "Регистрация")
            }
          </a>
      </header>
  );
}

export default withRouter(Header);
