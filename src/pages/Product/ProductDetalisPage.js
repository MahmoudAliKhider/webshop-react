import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import ProductDetalis from '../../components/Products/ProductDetalis'
import RateContainer from '../../components/Rate/RateContainer'
import ViewProductsDetalisHook from "../../hook/product/view-products-detalis-hook";
import { useParams } from 'react-router-dom'

const ProductDetalisPage = () => {
    const { id } = useParams()
    const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);

    if (prod)
        var items = prod.slice(0, 4)

    if (item) {
        var rateAvg = item.ratingsAverage
        var rateQty = item.ratingsQuantity
    }
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage