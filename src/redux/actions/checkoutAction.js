import { CREATE_ORDER_CASH,CREATE_ORDER_CRAD  } from '../type'
import { useInsertData} from '../../hooks/useInseartData'
import { useGetDataToken } from '../../hooks/useGetData'


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

export const createOrderCARD = (id, body) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/orders/checkout-session/${id}`, body);
        console.log(response)
        dispatch({
            type: CREATE_ORDER_CRAD,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CRAD,
            payload: e.response,
        })
    }
}