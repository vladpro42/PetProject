import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import css from "./ToggleButton.module.css"

export const ToggleButton = () => {
    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
    }

    const { i18n } = useTranslation();

    const changeLanguage = useCallback(language => {
        i18n.changeLanguage(language)
    }, [i18n]);

    useEffect(() => {
        if (!isToggled) {
            changeLanguage("en")
            return
        }
        changeLanguage("ru")

    }, [isToggled, changeLanguage])


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