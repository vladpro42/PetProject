import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ButtonGoBack from '../UI/ButtonGoBack';


const Header = () => {

    const { user } = useAuth();

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <a className='header__logo' href="/">LOGO</a>
                    {
                        !user ? <div className="sign__wrapper">
                            <Link to="auth/login" className='header__sign'>Sign In</Link>
                            <Link to="auth/register" className='header__sign'>Sign Up</Link>
                        </div> : <></>
                    }

                    {
                        user
                            ? <div className="other__btn">
                                <ButtonGoBack to="/">На стартовую страницу</ButtonGoBack>
                                <ButtonGoBack to="/main">На доски</ButtonGoBack>
                                <button>Редактировать профиль</button>
                                <button>Выйти</button>
                                <button>Создать новую доску</button>
                                <button>переключить язык</button>
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;