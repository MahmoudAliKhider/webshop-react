import React from 'react'
import NavBarLogin from '../../components/Uitily/NavBarLogin'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'

const HomePage = () => {
    return (
        <div >
            <NavBarLogin />
            <Slider />
            <HomeCategory/>
        </div>
    )
}

export default HomePage