import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR,GET_ONE_BRAND } from '../type';
import {useGetData }from '../../hooks/useGetData';
import { useInsertDataWithImage } from '../../hooks/useInseartData';

export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/brands?limit=${limit}`)
        dispatch({
            type: GET_ALL_BRAND,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })

    }
}

//get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/brands?limit=6&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const getOneBrand = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/brands/${id}`);
        dispatch({
            type: GET_ONE_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const createBrand = (formData) => async (dispatch) => {
    try {
        const response = await useInsertDataWithImage(`/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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
