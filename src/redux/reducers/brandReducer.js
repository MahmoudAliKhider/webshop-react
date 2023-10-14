import { GET_ALL_BRAND, GET_ERROR } from '../type';

const inital = {
    brand: [],
    loading: true,
}

const brandReducer = (state = inital, action) => {

    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }

        case GET_ERROR:
            return {
                loading: true,
                brand: action.payload,
            }
        default:
            return state;
    }
}

export default brandReducer;