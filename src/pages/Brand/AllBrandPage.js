import React from 'react';

import BrandContainer from '../../components/Brand/BrandContainer';
import Pagination from '../../components/Uitily/Pagination';
import AllBrandHook from '../../hook/brand/all-brand-page-hook'

const AllBrand = () => {
    const [brand, loading, pageCount, getPage] = AllBrandHook();

    return (
        <div style={{ minHeight: '670px' }}>
            <BrandContainer loading={loading} data={brand.data} />
            <Pagination pageCount={pageCount} onPress={getPage} />
        </div>
    )
}

export default AllBrand