import React from 'react'

const AlertDelete = ({onClick, setAlert}) => {
    return (
        <div className="alert">
            <div className="alert__delete">
                <h4 className='alert__title'>Вы уверены?</h4>
                <button onClick={onClick} className='alert__button alert__button_delete'>Удалить</button>
                <button onClick={() => setAlert(prev => !prev)} className='alert__button'>Отменить</button>
            </div>
        </div>
    )
}

export default AlertDelete