import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import css from "../SignUp/SignUp.module.css";
import { login, loginUrl } from './api/auth-api';
import { useDispatch } from 'react-redux';
import { setUser, setAuth } from './api/userSlice';

const FormSignIn = () => {
    const dispath = useDispatch();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickSubmit = async (e, url, body) => {
        e.preventDefault();
        const response = await login(url, body);
        if (response.ok) {
            navigate("/main", { replace: true })
        }
        else {
            return
        }
        const fethData = await response.json();
        dispath(setAuth(true))
        localStorage.setItem("token", fethData.accessToken);
        dispath(setUser(fethData.user))
    }


    return (

        <form className={css.sign} style={{ marginTop: "var(--heightHeader)" }}>
            <div className={css.sign__container}>
                <h1 className={css.title}>{t("Sign In")}</h1>
                <div className={css.sign__wrapper}>
                    <label className={css.label}>
                        <input
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                <button
                    onClick={(e) => handleClickSubmit(e, loginUrl, { email, password })}
                    type='submit'
                    className={css.signUp}
                >
                    {t("sign button")}
                </button>
                <Link to="/auth/register" className={css.text}>{t("I don't have an account")}</Link>
            </div>
        </form>

    )
}

export default FormSignIn