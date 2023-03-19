import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleAlertDeleteBoard, removeBoard } from '../slice/createBoardSlice'

const AlertDelete = ({id}) => {

    const dispatch = useDispatch()

    return (
        <div className="alert">
            <div className="alert__delete">
                <h2 className='alert__title'>Вы уверены?</h2>
                <button onClick={() => dispatch(removeBoard(id))} className='alert__button alert__button_delete'>Удалить</button>
                <button onClick={() => dispatch(toggleAlertDeleteBoard("board"))} className='alert__button'>Отменить</button>
            </div>
        </div>
    )
}

export default AlertDelete