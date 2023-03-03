import React from 'react';
import { Outlet } from 'react-router-dom';
import css from "../style/WellcomePage.module.css";
import svg from "../assets/images/kanban.svg";


const WelcomePage = () => {
    return (
        <main style={{ marginTop: "var(--heightHeader)" }} className={css.about}>
            <div className="container">
                <div className={css.inner}>
                    <div className={css.inner__column}>
                        <div className={css.about__project}>
                            <h1 className={css.title}>Таск-менеджер</h1>
                            <p className={css.text}>
                                Это программа для управления проектами, которая позволяет централизованно руководить задачами и их своевременным выполнением. Трекеры широко используются в проектном менеджменте, потому что позволяют без труда следить за всеми рабочими процессами и контролировать работу команды
                            </p>
                        </div>
                        <div className={css.images}>
                            <img src={svg} alt="menegment" width={500} height={500} />
                        </div>
                    </div>
                    <div className={css.inner__column_two}>
                        <div className={css.about__image}  width="400px" height="280px"></div>
                        <div className={css.about__developer}>
                            <h2 className={css.text}>
                                Привет, меня зовут влад
                            </h2>
                            <a href='https://vladpro42.github.io/rsschool-cv/' className={css.text}>
                                Мое св
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </main>
    );
};

export default WelcomePage;
