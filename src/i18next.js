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
            "input to do": "input to do",
            "submit": "submit",
            /* "Create task": "Create task",
            "name task": "name task",
            "description": "description",
            "Create task button": "create task", */
            "Sign In": "Sign In",
            "Sign In": "Sign In",
            "input login or email placeholder": "input login or email",
            "input password placeholder": "input password",
            "sign button": "sign",
            "I don't have an account": "I don't have an account",

        }
    },

    ru: {
        translation: {
            "Task manager": "Таск менеджер",
            "Task description": `
                Это программа для управления проектами, которая позволяет централизованно руководить задачами и их своевременным выполнением. Трекеры широко используются в проектном менеджменте, потому что позволяют без труда следить за всеми рабочими процессами и контролировать работу команды`,
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