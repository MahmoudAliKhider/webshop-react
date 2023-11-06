import { CREATE_ORDER_CASH } from '../type'
import { useInsertData } from '../../hooks/useInseartData'


export const createOrderCash = (id, body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/orders/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response,
        })
    }
}