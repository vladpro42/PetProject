import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ButtonGoBack from '../UI/ButtonGoBack';
import { ToggleButton } from '../UI/ToggleButton';

import css from "../style/Header.module.css"
import { useSelector } from 'react-redux';
import { getAuth } from '../modules/SignIn/api/userSlice';


const Header = () => {

    const { t } = useTranslation();
    const user = useSelector(getAuth)

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header__inner}>
                    <a className={css.header__logo} href="/">LOGO</a>
                    {
                        !user ? <div className="sign__wrapper">
                            <Link to="auth/login" className={css.header__sign}>{t("Sign In")}</Link>
                            <Link to="auth/register" className={css.header__sign}>{t("sign Up")}</Link>
                        </div> : <></>
                    }

                    {
                        user
                            ? <div className="other__btn">
                                <ButtonGoBack to="/">{t("to start page")}</ButtonGoBack>
                                <ButtonGoBack to="/main">{t("on boards")}</ButtonGoBack>
                                {/*  <button>Редактировать профиль</button> */}
                                {/* <button>Выйти</button> */}
                            </div>
                            : <></>
                    }
                    <ToggleButton></ToggleButton>
                </div>
            </div>
        </header>
    );
};

export default Header;