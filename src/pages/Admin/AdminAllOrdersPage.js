import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AdminSideBar from '../../components/Admin/AdminSideBar';
import AdminAllOrders from '../../components/Admin/AdminAllOrders';
import Pagination from '../../components/Uitily/Pagination';
const AdminAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllOrders />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage