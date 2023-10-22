import { CREATE_REVIEW, ALL_REVIEW_PRODUCT } from '../type'
import { useInsertData } from '../../hooks/useInseartData';
import { useGetDataToken } from "../../hooks/useGetData";

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
export const allReviewProduct = (prodID, page, limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/products/${prodID}/reviews?page=${page}&limit=${limit}`);
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: e.response,
        })
    }
}