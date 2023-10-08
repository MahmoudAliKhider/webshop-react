import React from 'react'
import NavBarLogin from '../../components/Uitily/NavBarLogin'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/Home/DiscountSection'


const HomePage = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <NavBarLogin />
            <Slider />
            <HomeCategory />
            <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد" />
            <DiscountSection />
            <CardProductsContainer title="احدث الازياء" btntitle="المزيد" />
        </div>
    )
}

export default HomePage