import React from 'react'
import NavBarLogin from '../../components/Uitily/NavBarLogin'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'
import Footer from '../../components/Uitily/Footer'


const HomePage = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
            <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
            <DiscountSection />
            <CardProductsContainer title="احدث الازياء" btntitle="المزيد" />
            <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
            <Footer />
        </div>
    )
}

export default HomePage