//actions for login reducer
import { laravelRegister, laravelLogin } from "../../api/laravel_api"


export const login = (userData) => {
    return async (dispatch) => {
        const result = await laravelLogin(userData.email, userData.password);
    }
}

export const register = (userData) => {
    return async (dispatch) => {
        const { result } = await laravelRegister(userData.name, userData.email, userData.password, userData.confirm_password);
    }
}



export const logout = (user) => {
    return {
        type: 'LOGOUT'
    }
}


const updatePassword = (user) => {
}