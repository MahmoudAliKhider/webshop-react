import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const HomeCategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.loading);

    const colors = ["#FFD3E8", "#F4DBAS", "#FF6262", "#55CFDF", "#0034FF", "#FFD3E8"]
    return [category, loading, colors];
}
export default HomeCategoryHook;