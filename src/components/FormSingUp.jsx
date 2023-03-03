import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import css from "./style/SignUp.module.css";
import { Link } from 'react-router-dom';

const FormSingUp = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate()

  const handleClickSingUp = e => {
    e.preventDefault();
    signUp({
      login, password, email
    }, () => navigate("/main"))
  }

  return (
    <form className={css.sign} style={{ marginTop: "var(--heightHeader)" }}>
      <div className={css.sign__container}>
        <h1 className={css.title}>Sign Up</h1>
        <div className={css.sign__wrapper}>
          <label className={css.label}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={css.input}
              type="text"
              placeholder='Введите почту '
            />
          </label>
          <label className={css.label}>
            <input
              value={login}
              onChange={e => setLogin(e.target.value)}
              className={css.input}
              type="text"
              placeholder='Введите логин'
            />
          </label>
          <label className={css.label}>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={css.input}
              type="password"
              placeholder='Введите пароль'
            />
          </label>
        </div>
        <button onClick={handleClickSingUp} className={css.signUp}>
          <p>Зарегистрироваться</p>
        </button>
          <Link to="/auth/login" className={css.text}>У меня уже есть аккаунт</Link>
      </div>
    </form>
  )
}

export default FormSingUp