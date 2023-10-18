import { CREATE_PRODUCTS, GET_ERROR, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS, GET_PRODUCT_LIKE, DELETE_PRODUCTS } from '../type';

import { useInsertDataWithImage } from '../../hooks/useInseartData';
import useGetData from '../../hooks/useGetData';
import useDeleteData from "../../hooks/useDeleteData";

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
            type: GET_PRODUCT_DETALIS,
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
//get one product with id
export const getProductLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
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
export const getAllProductsPage = (page, limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?page=${page}&limit=${limit}`);
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
export const deleteProducts = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/products/${id}`);
        dispatch({
            type: DELETE_PRODUCTS,
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