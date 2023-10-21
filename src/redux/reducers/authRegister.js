import { CREATE_NEW_USER, LOGIN_USER, GET_CURERNT_USER, FOREGT_PASSWORD } from '../type'

const inital = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    forgetPassword: [],
    loading: true,
}
const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
            }
        case GET_CURERNT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case FOREGT_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        default:
            return state;
    }
}

export default authReducer