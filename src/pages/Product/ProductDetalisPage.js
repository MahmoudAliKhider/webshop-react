import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ProductDetalis from '../../components/Products/ProductDetalis'
import RateContainer from '../../components/Rate/RateContainer'

const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage