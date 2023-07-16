import { useDispatch } from "react-redux"
import { setStateFromDataBase } from "../reducer/createBoardSlice"

export const getTasks = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            credentials: "include"
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

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
