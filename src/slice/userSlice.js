import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    isAuth: false
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload.isAuth
        },

        setUser(state, action) {
            state.user = action.payload.user
        },

        /* async login(email, password) {
            try {
                const response = await AuthService.login(email, password)
                localStorage.setItem("token", response.data.accessToken)
                //setAuth(true)
                //setUser(user)
            } catch (error) {
                console.log(error.response?.data?.message)
            }
        } */
    }
})

export const { setAuth, setUser } = userSlice.actions

export default userSlice.reducer