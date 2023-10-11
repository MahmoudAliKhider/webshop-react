import { GET_ALL_CATEGORY, GET_ERROR } from '../type';

const inital = {
    category: [],
    loading: true,
}

const categoryReducer = (state = inital, action) => {

    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                category: action.payload,
            }
        default:
            return state;
    }
}

export default categoryReducer;