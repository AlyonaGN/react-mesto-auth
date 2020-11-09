import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import logoPath from '../images/header-logo.png';

function Header() {
  const signinPath = "/sign-in";
  const signupPath = "/sign-up";

  return (
    <Route path="*">
      <header className="header page__header">
        <img className="header__logo" src={logoPath} alt="здесь должен быть логотип, но что-то пошло не так" />
            <Switch>
              <Route exact path="/"></Route>
              <Route path={signinPath}><a href={signupPath} className="header__link">Регистрация</a></Route>
              <Route path={signupPath}><a href={signinPath} className="header__link">Войти</a></Route>
            </Switch>
      </header>
    </Route>
  );
}

export default withRouter(Header);
