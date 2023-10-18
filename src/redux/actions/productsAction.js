import { CREATE_PRODUCTS, GET_ERROR, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS } from '../type';

import { useInsertDataWithImage } from '../../hooks/useInseartData';
import useGetData from '../../hooks/useGetData';

export const createProduct = (formatData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/products`, formatData)
        dispatch({
            type: CREATE_PRODUCTS,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })

    }
}
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/products/${id}`);
        dispatch({
            type:  GET_PRODUCT_DETALIS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}