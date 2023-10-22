import { CREATE_NEW_USER, LOGIN_USER, GET_CURERNT_USER, FOREGT_PASSWORD, VERIFY_PASSWORD } from '../type'
import { useInsertData } from "../../hooks/useInseartData";
import { useGetDataToken } from '../../hooks/useGetData';

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

export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/users/getMe`)
        dispatch({
            type: GET_CURERNT_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_CURERNT_USER,
            payload: e.response,
        })
    }
}
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/auth/forgotPasswords`, data);
        dispatch({
            type: FOREGT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: FOREGT_PASSWORD,
            payload: e.response,
        })
    }
}

export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/auth/verifyResetCode`, data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}