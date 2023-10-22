import { CREATE_REVIEW } from '../type'
import { useInsertData } from '../../hooks/useInseartData'

export const createReview = (prodID, body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/products/${prodID}/reviews`, body);

        dispatch({
            type: CREATE_REVIEW,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_REVIEW,
            payload: e.response,
        })
    }
}