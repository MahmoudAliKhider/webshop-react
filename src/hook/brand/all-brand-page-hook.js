import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction'

const AllBrandHook = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBrand(6))
    }, [])

    const brand = useSelector(state => state.allBrand.brand);
    const loading = useSelector(state => state.allBrand.loading);

    let pageCount = 0;
    if (brand.paginationResult) {
        pageCount = brand.paginationResult.numberOfPages
    }

    const getPage = (page) => {
        dispatch(getAllBrandPage(page))
    }
    return [brand, loading, pageCount, getPage]
}

export default AllBrandHook