import React from 'react';
import { withRouter, Route, Switch, Link } from 'react-router-dom';
import logoPath from '../images/header-logo.png';
import { ROUTES_MAP } from '../utils/routesMap';

function Header() {

  return (
    <Route path="*">
      <header className="header page__header">
        <img className="header__logo" src={logoPath} alt="здесь должен быть логотип, но что-то пошло не так" />
            <Switch>
              <Route exact path={ROUTES_MAP.MAIN}></Route>
              <Route path={ROUTES_MAP.SIGNIN}><Link to={ROUTES_MAP.SIGNUP}className="header__link">Регистрация</Link></Route>
              <Route path={ROUTES_MAP.SIGNUP}><Link to={ROUTES_MAP.SIGNIN} className="header__link">Войти</Link></Route>
            </Switch>
      </header>
    </Route>
  );
}

export default withRouter(Header);
