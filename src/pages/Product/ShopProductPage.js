import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CategoryHeader from '../../components/Category/CategoryHeader';
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import Pagination from '../../components/Uitily/Pagination';
import SearchCountResult from '../../components/Uitily/SearchCountResult'
import SideFilter from '../../components/Uitily/SideFilter'
import ViewSearchProductsHook from '../../hook/product/view-search-products-hook';

const ShopProductsPage = () => {
    const [items] = ViewSearchProductsHook();
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title={`${items.length} نتجية بحث`} />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <CardProductsContainer products={items} title="" btntitle="" />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage