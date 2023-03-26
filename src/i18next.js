import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {
            "Task manager": "Task manager",
            "Task description": `
                This is a project management program that allows you to centrally manage tasks and their timely completion. Trackers are widely used in project management, because they allow you to easily monitor all work processes and control the work of the team.`,
            "Hello I am": "Hello, my name is Vlad",
            "MyCV": "MyCV",
            "Create board": "Create board",
            "Board name": "Board name",
            "Create": "Create",
            "Create a new Task": "Create a new Task",
            "create a new board": "Create a new board",
            "input to do": "input to do",
            "submit": "submit",
            /* "Create task": "Create task",
            "name task": "name task",
            "description": "description",
            "Create task button": "create task", */
            "sign In": "Sign In",
            "input login or email placeholder": "input login or email",
            "input password placeholder": "input password",
            "sign button": "sign",
            "I don't have an account": "I don't have an account",
            "sign up placeholder input email": "input email",
            "sign up placeholder input login": "input login",
            "sign up placeholder input password": "input password",
            "sign up": "Sign up",
            "I have an account": "I have an account",
            "to start page": "to start page",
            "on boards": "on boards",
        }
    },

    ru: {
        translation: {
            "Task manager": "Таск менеджер",
            "Task description": `
                Это программа для управления проектами, которая позволяет централизованно руководить задачами и их своевременным выполнением. Трекеры широко используются в проектном менеджменте, потому что позволяют без труда следить за всеми рабочими процессами и контролировать работу команды`,
            "Hello I am": "Привет меня зовут влад",
            "MyCV": "Мое св",
            "Create board": "Создать доску",
            "Board name": "Название доски",
            "Create": "Создать",
            "Create a new Task": "Создать новое дело",
            "create a new board": "Создать новую доску",
            "input to do": "Введите дело",
            "submit": "отправить",
            /* "Create task": "Create task",
            "name task": "name task",
            "description": "description",
            "Create task button": "create task", */
            "Sign In": "Войти",
            "sign Up": "Зарегестрироваться",
            "input login or email placeholder": "Введите логин или почту",
            "input password placeholder": "Ввведите пароль",
            "sign button": "Войти",
            "I don't have an account": "У меня нет аккаунта",
            "sign up placeholder input email": "Введите почту",
            "sign up placeholder input login": "Введите логин",
            "sign up placeholder input password": "Введите пароль",
            "Sign up": "Зарегестрироваться",
            "I have an account": "У меня уже есть аккаунт",
            "to start page": "На стартовую страницу",
            "on boards": "На доски",
        }
    },
}

export default i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false
        }
    });