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
            state.isAuth = action.payload
        },

        setUser(state, action) {
            state.user = action.payload
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

export const getUser = (state) => state.user.user
export const getAuth = (state) => state.user.isAuth