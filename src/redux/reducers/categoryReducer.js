import  GET_ALL_CATEGORY  from '../type';

const inital = {
    category: [],
    loading: true,
}

const categoryReducer = (state = inital, action) => {

    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        default:
            return state;    
    }
}

export default categoryReducer;