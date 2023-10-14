import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Uitily/Pagination'


import AllCategoryHook from '../../hook/category/all-category-page-hook'

const AllCategoryPage = () => {

  const [category, loading, pageCount, getPage] = AllCategoryHook();

  return (
    <div style={{ minHeight: "630px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />

        ) : null
      }
    </div>
  )
}

export default AllCategoryPage