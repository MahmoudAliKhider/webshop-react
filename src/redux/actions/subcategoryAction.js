import { CREATE_SUB_CATEGORY, GET_ERROR } from '../type'
import { useInsertData } from '../../hooks/useInseartData';

export const createSubCategory = (data) => async (dispatch) => {

    try {
        const response = await useInsertData('/subcategories',data);
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