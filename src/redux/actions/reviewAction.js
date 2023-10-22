import { CREATE_REVIEW, ALL_REVIEW_PRODUCT, DELETE_REVIEW, UPDATE_REVIEW } from '../type'
import { useInsertData } from '../../hooks/useInseartData';
import { useGetDataToken } from "../../hooks/useGetData";
import useDeleteData from './../../hooks/useDeleteData';
import { useInsUpdateData } from '../../hooks/useUpdateData';

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
export const deleteReviewOnProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/reviews/${id}`);

        dispatch({
            type: DELETE_REVIEW,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELETE_REVIEW,
            payload: e.response,
        })
    }
}

//update review to one product 
export const updateReviewOnProduct = (id, body) => async (dispatch) => {
    try {
        const response = await useInsUpdateData(`/reviews/${id}`, body);

        dispatch({
            type: UPDATE_REVIEW,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: UPDATE_REVIEW,
            payload: e.response,
        })
    }
}