import { CREATE_PRODUCTS, GET_ERROR, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS, GET_PRODUCT_LIKE, DELETE_PRODUCTS, UPDATE_PRODUCTS, GET_ALL_PRODUCTS_CATEGORY, GET_ALL_PRODUCTS_BRAND } from '../type';

import { useInsertDataWithImage } from '../../hooks/useInseartData';
import { useGetData } from '../../hooks/useGetData';
import useDeleteData from "../../hooks/useDeleteData";
import { useInUpdateDataWithImage } from '../../hooks/useUpdateData';

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

export const getAllProductsByCategory = (page, limit, categoryID) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?limit=${limit}&category=${categoryID}&page=${page}`);
        dispatch({
            type: GET_ALL_PRODUCTS_CATEGORY,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS_CATEGORY,
            payload: e.response,
        })
    }
}

//get all products by brand
export const getAllProductsByBrand = (page, limit, brandID) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?limit=${limit}&brand=${brandID}&page=${page}`);
        dispatch({
            type: GET_ALL_PRODUCTS_BRAND,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_PRODUCTS_BRAND,
            payload: e.response,
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
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetData(`/products?${queryString}`);
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
export const updateProducts = (id, data) => async (dispatch) => {
    try {
        const response = await useInUpdateDataWithImage(`/products/${id}`, data);
        dispatch({
            type: UPDATE_PRODUCTS,
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