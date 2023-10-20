import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';
import { getAllProductsSearch } from "../../redux/actions/productsAction"
const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    let limit = 5;

    const getProduct = async () => {
        let word = "";
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord");

        await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`))

    }
    useEffect(() => {
        getProduct('');
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)

    let items = [];
    try {
        if (allProducts.data)
            items = allProducts.data;
        else
            items = []
    } catch (error) { }

    let pagination = [];
    try {
        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (error) { }


    const onPress = async (page) => {
        await dispatch(getAllProductsPage(page, limit))
    }

    return [items, pagination, onPress, getProduct]

}

export default ViewSearchProductsHook