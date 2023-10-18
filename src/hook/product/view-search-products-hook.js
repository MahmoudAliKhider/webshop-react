import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';

const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(12))
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)

    let items = [];
    if (allProducts.data)
        items = allProducts.data;
    else
        items = []

   

    return [items]

}

export default ViewSearchProductsHook