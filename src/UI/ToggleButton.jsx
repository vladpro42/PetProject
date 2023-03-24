import { useState } from 'react'
import css from "./ToggleButton.module.css"

export const ToggleButton = () => {
    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
    }

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