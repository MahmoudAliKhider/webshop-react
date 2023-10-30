import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction'

const AllCategoryHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory(6))
    }, [])

    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.loading);

    let pageCount = 0;
    try {
        if (category.paginationResult)
            pageCount = category.paginationResult.numberOfPages
    } catch (e) { }
    
    const getPage = (page) => {
        dispatch(getAllCategoryPage(page));
        console.log(page)
    }
    return [category, loading, pageCount, getPage]
}

export default AllCategoryHook