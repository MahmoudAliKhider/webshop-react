import React, { useEffect } from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Uitily/Pagination'

import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(6))
  }, [])

  const category = useSelector(state => state.allCategory.category);
  const loading = useSelector(state => state.allCategory.loading);

  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages
  }

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page))
  }
  return (
    <div style={{ minHeight: "630px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageCount>1?(
      <Pagination pageCount={pageCount} onPress={getPage} />

        ):null
      }
    </div>
  )
}

export default AllCategoryPage