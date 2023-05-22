import { useDispatch } from "react-redux"
import { setStateFromDataBase } from "../slice/createBoardSlice"

export const getTasks = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const useFetchData = async (url) => {
    const dispatch = useDispatch()

    getTasks(url).then((boards) => {
        dispatch(setStateFromDataBase(boards))
    })
}

export const saveToState = async (data) => {
    const dispatch = useDispatch
    dispatch(setStateFromDataBase(data))
}
