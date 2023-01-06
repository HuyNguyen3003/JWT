import axios from "axios"
import {
    loginFailed, loginStart, loginSuccess, registerStart, registerSuccess, registerFailed,
    logoutStart, logoutSuccess, logoutFailed
} from "./authSlice"
import {
    getUserStart, getUserSuccess, getUserFailed, deleteUserStart, deleteUserSuccess, deleteUserFailed
} from "./userSlice.js"




export const loginUser = async (user, dispatch, navigate) => {
    try {
        dispatch(loginStart())
        const res = await axios.post("/v1/auth/login", user)
        dispatch(loginSuccess(res.data))
        navigate("/")

    } catch (e) {
        console.log(e)
        dispatch(loginFailed())

    }
}
export const registerUser = async (user, dispatch) => {
    try {
        dispatch(registerStart())
        const res = await axios.post("/v1/auth/register", user)
        dispatch(registerSuccess(res.data))

    } catch (e) {
        console.log(e)
        dispatch(registerFailed())

    }
}

export const getAllUsers = async (accessToken, dispatch) => {
    try {
        dispatch(getUserStart())
        const res = await axios.get("/v1/user/", {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(getUserSuccess(res.data))

    } catch (e) {
        console.log(e)
        dispatch(getUserFailed())

    }
}

export const deletelUsers = async (accessToken, dispatch, id) => {
    try {
        dispatch(deleteUserStart())
        const res = await axios.delete("/v1/user/" + id, {
            headers: { token: `Bearer ${accessToken}` }
        })
        dispatch(deleteUserSuccess('deleteSuccess'))

    } catch (e) {
        console.log(e)
        dispatch(deleteUserFailed('deleteFailed'))

    }
}

export const logoutUsers = async (dispatch, id, navigate, token) => {
    try {
        dispatch(logoutStart())

        // await axios.post("/v1/auth/logout", id, {
        //     header: { token: `Bearer ${token}` }
        // })
        dispatch(logoutSuccess())
        navigate("/login")


    } catch (e) {
        console.log(e)
        dispatch(logoutFailed())

    }
}