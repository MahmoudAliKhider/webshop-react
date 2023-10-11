import React, { useEffect } from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Uitily/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
const AllCategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const data = useSelector(state => state.allCategory.category);
  const loading = useSelector(state => state.allCategory.loading);
  

  return (
    <div style={{ minHeight: "630px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}

export default AllCategoryPage