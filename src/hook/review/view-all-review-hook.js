import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allReviewProduct } from "../../redux/actions/reviewAction";
const ViewAllReviewHook = (id) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const allReview = useSelector(state => state.reviewReducer.allReviewProduct);
    if(allReview){
        console.log(allReview)
    }
    useEffect(() => {
        setLoading(false)
        dispatch(allReviewProduct(id, 1, 5))
    }, [])

    const onPress = async (page) => {
        await dispatch(allReviewProduct(id, page, 5))
    }

    return [allReview, onPress]
}
export default ViewAllReviewHook 