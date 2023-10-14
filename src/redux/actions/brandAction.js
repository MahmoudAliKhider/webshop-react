import { GET_ALL_BRAND, GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';
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

//get all category with pagination
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