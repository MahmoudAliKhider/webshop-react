import { CREATE_PRODUCTS, GET_ERROR } from '../type';

const inital = {
    product: [],
    loading: true,
}

const productsReducer = (state = inital, action) => {

    switch (action.type) {
        case CREATE_PRODUCTS:
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

export default productsReducer;