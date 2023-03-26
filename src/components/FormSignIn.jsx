import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import css from "./style/SignUp.module.css";


const FormSignIn = () => {

    const {t} = useTranslation();

    const navigate = useNavigate();

    const { signIn } = useAuth()

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleClickSubmit = e => {
        e.preventDefault();
        signIn({ login, password }, () => navigate("/main", { replace: true }));
    }

    return (

        <form className={css.sign} style={{ marginTop: "var(--heightHeader)" }}>
            <div className={css.sign__container}>
                <h1 className={css.title}>{t("Sign In")}</h1>
                <div className={css.sign__wrapper}>
                    <label className={css.label}>
                        <input
                            name='login'
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            className={css.input}
                            type="text"
                            placeholder={t("input login or email placeholder")}
                        />
                    </label>
                    <label className={css.label}>
                        <input
                            name='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={css.input}
                            type="password"
                            placeholder={t("input password placeholder")}
                        />
                    </label>
                </div>
                <button onClick={handleClickSubmit} type='submit' className={css.signUp}>
                    {t("sign button")}
                </button>
                <Link to="/auth/register" className={css.text}>{t("I don't have an account")}</Link>
            </div>
        </form>

    )
}

export default FormSignIn