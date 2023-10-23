import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

import SubTiltle from '../Uitily/SubTitle'
import ProductCard from './ProductCard'
import CardContainerHook from "../../hook/product/card-container-hook"

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
    const [favProd] = CardContainerHook()
    return (
        <Container>
            {products ? (<SubTiltle title={title} btntitle={btntitle} pathText={pathText} />) : null}
            <Row className='my-2 d-flex justify-content-between'>
                {
                    products ? (
                        products.map((item, index) =>
                            <ProductCard  favProd={favProd} key={index} item={item} />)
                    ) : null
                }

            </Row>
        </Container>
    )
}

export default CardProductsContainer