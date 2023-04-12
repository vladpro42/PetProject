import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import css from "./ToggleButton.module.css"

export const ToggleButton = () => {
    const [isToggled, setToggle] = useState(false)

    const callback = () => {
        setToggle(!isToggled)
    }

    const { i18n } = useTranslation();

    const changeLanguage = language => {
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        if (!isToggled) {
            changeLanguage("en")

        } else {
            changeLanguage("ru")
        }

    }, [isToggled])


    return (
        <div className={css.toggle}>
            <span className={css.span__text}>En</span>
            <label style={{ marginLeft: "0px" }} className={css.label}>
                <input className={css.input} type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span className={css.span} />
                <strong>{ }</strong>
            </label >
            <span className={css.span__text}>Ru</span>

        </div>
    )
}