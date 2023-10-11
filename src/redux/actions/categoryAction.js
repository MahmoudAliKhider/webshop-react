import { GET_ALL_CATEGORY, GET_ERROR } from '../type';
import baseUrl from '../../Api/baseURL';

const getAllCategory = () => async (dispatch) => {
    try {
        const res = await baseUrl.get('/categories');
        console.log(res.data)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + error,
        })

    }
}