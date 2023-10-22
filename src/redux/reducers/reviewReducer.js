import { CREATE_REVIEW } from '../type';

const inital = {
    createView: [],
    loading: true,
}

const reviewReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_REVIEW:
            return {
                ...state,
                createView: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}

export default reviewReducer;