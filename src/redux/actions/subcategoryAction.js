import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from '../type'
import { useInsertData } from '../../hooks/useInseartData';
import {useGetData }from '../../hooks/useGetData';

export const createSubCategory = (data) => async (dispatch) => {

    try {
        const response = await useInsertData('/subcategories', data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
            payload: response,
            loading: true
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })
    }
}

// get subcategory depend on cate
export const getOneCategory = (id) => async (dispatch) => {

    try {
        const response = await useGetData(`categories/${id}/subcategories`);
        dispatch({
            type: GET_SUB_CATEGORY,
            payload: response,
            loading: true
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })
    }
}