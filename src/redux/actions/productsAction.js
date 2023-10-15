import { CREATE_PRODUCTS, GET_ERROR } from '../type';

import { useInsertDataWithImage } from '../../hooks/useInseartData';

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