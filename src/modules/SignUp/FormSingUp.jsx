import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import css from "./SignUp.module.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slice/userSlice';


const FormSingUp = () => {
  const dispatch = useDispatch();


  const { t } = useTranslation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate()


  const handleClickSingUp = async e => {
    e.preventDefault();

    const body = {
      email,
      password
    }

    const response = await fetch("http://localhost:5555/api/registration", {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    });

    if (!response.ok) {
      return alert("Не удалось установить связь с сервером")
    }

    if (response.error) {
      return alert("Ошибка регистрации")
    }


    const fetchingData = await response.json()
    dispatch(setUser(fetchingData.user))
    localStorage.setItem("token", fetchingData.accessToken)
    navigate("/main")

  }

  return (
    <form className={css.sign} style={{ marginTop: "var(--heightHeader)" }}>
      <div className={css.sign__container}>
        <h1 className={css.title}>{t("sign Up")}</h1>
        <div className={css.sign__wrapper}>
          <label className={css.label}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={css.input}
              type="text"
              placeholder={t("sign up placeholder input email")}
            />
          </label>
          <label className={css.label}>
            <input
              value={login}
              onChange={e => setLogin(e.target.value)}
              className={css.input}
              type="text"
              placeholder={t("sign up placeholder input login")}
            />
          </label>
          <label className={css.label}>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={css.input}
              type="password"
              placeholder={t("sign up placeholder input password")}
            />
          </label>
        </div>
        <button onClick={handleClickSingUp} className={css.signUp}>
          <p>{t("sign up")}</p>
        </button>
        <Link to="/auth/login" className={css.text}>{t("I have an account")}</Link>
      </div>
    </form>
  )
}

export default FormSingUp