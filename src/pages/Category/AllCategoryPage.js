import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import  Pagination  from '../../components/Uitily/Pagination'
// import baseUrl from '../../Api/baseURL'
const AllCategoryPage = () => {

  // const getAllCategory =async ()=>{
  //   const res =await baseUrl.get('/categories');
  //   console.log(res.data)
  // }

  // useEffect(()=>{
  //  getAllCategory();
  // },[]);

  return (
    <div style={{minHeight:"630px"}}>
        <CategoryContainer />
        <Pagination />
    </div>
  )
}

export default AllCategoryPage