import { GET_ALL_CATEGORY, GET_ERROR } from '../type';
import useGetData from '../../hooks/useGetData';

export const getAllCategory = () => async (dispatch) => {
    try {
        const response = await useGetData('/categories')
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })

    }
}