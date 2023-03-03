import React from 'react';
import { useLocation } from 'react-router-dom';
import css from "./style/SignUp.module.css";

const Footer = () => {

  const { pathname } = useLocation()
  return (
    <footer
      className={pathname === "/auth/login" || pathname === "/auth/register" ? css.footer : "footer"}
    >
      <div className="container">
        <div
          className={pathname === "/auth/login" || pathname === "/auth/register" ? css.footer__inner : "footer__inner"}
        >
          <a href="/">GitHub</a>
          <p href="/">2023</p>
          <a href="/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer