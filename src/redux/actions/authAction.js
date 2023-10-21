import { CREATE_NEW_USER, LOGIN_USER } from '../type'
import { useInsertData } from "../../hooks/useInseartData";

export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}