import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserAllAddress from '../../components/User/UserAllAddress';
import UserSideBar from '../../components/User/UserSideBar';
const UserAllAddresPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAllAddress />
                </Col>
            </Row>
        </Container>
    )
}

export default UserAllAddresPage