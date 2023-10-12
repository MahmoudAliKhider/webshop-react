import { GET_ALL_CATEGORY, GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';

export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/categories?limit=${limit}`)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })

    }
}

//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`/categories?limit=7&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}