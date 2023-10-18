import React from 'react'

import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'

import ViewHomeProductsHook from "../../hook/product/view-home-products-hook";

const HomePage = () => {
const [items] = ViewHomeProductsHook();

    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <Slider />
            <HomeCategory />
            <CardProductsContainer products={items}  title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={items} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
        </div>
    )
}

export default HomePage