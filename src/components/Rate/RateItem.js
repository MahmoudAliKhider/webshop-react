import React from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png';
import deleteicon from '../../images/delete.png'
import editicon from '../../images/edit.png'

const RateItem = ({ review }) => {

    return (
        <div>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{review.user.name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {review.review}
                    </div>
                    <div className='d-inline d-flex justify-content-end'>
                            <img src={deleteicon}  width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" />

                            <img src={editicon}  width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" />

                        </div>
                </Col>
            </Row>
        </div>
    )
}

export default RateItem