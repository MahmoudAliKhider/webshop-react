import { CREATE_PRODUCTS, GET_ERROR, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS, GET_PRODUCT_LIKE, DELETE_PRODUCTS } from '../type';

const inital = {
    products: [],
    allProducts: [],
    oneProduct: [],
    productLike: [],
    deleteProducts: [],
    loading: true,
}

const productsReducer = (state = inital, action) => {

    switch (action.type) {
        case CREATE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_PRODUCT_DETALIS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
        
            case DELETE_PRODUCTS:
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            }
        default:
            return state;
    }
}

export default productsReducer;