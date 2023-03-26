import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ButtonGoBack from '../UI/ButtonGoBack';
import { ToggleButton } from '../UI/ToggleButton';
import i18n from "../i18next"


const Header = () => {

    const { t, i18n } = useTranslation();
    const { user } = useAuth();



    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <a className='header__logo' href="/">LOGO</a>
                    {
                        !user ? <div className="sign__wrapper">
                            <Link to="auth/login" className='header__sign'>{t("Sign In")}</Link>
                            <Link to="auth/register" className='header__sign'>{t("sign Up")}</Link>
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