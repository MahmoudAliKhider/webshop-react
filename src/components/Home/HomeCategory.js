import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';

import SubTiltle from '../Uitily/SubTitle'
import CategoryCard from './../Category/CategoryCard';


import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const HomeCategory = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.loading);

    const colors = ["#FFD3E8", "#F4DBAS", "#FF6262", "#55CFDF", "#0034FF", "#FFD3E8"]
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText={'/allcategory'} />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        category.data ? (
                            category.data.slice(0, 6).map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[index]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }

            </Row>
        </Container>
    )
}

export default HomeCategory