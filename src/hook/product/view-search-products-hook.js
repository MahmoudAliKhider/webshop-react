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

        sortData();
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}`))

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

    let results = 0;
    try {
        if (allProducts.results)
            results = allProducts.results;
        else
            results = 0;
    } catch (error) { }



    const onPress = async (page) => {
        let word = "";
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord");

        sortData();
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`))
    }

    let sortType = '', sort;

    const sortData = () => {
        if (localStorage.getItem("sortType") != null) {
            sortType = localStorage.getItem('sortType')
        }
        else {
            sortType = '';
        }
        if (sortType === "السعر من الاقل للاعلي")
            sort = "+price"
        else if (sortType === "السعر من الاعلي للاقل")
            sort = "-price"
        else if (sortType === "")
            sort = ""
        else if (sortType === "الاكثر مبيعا")
            sort = "-sold"
        else if (sortType === "الاعلي تقييما")
            sort = "-quantity"
    }

    return [items, pagination, onPress, getProduct, results]

}

export default ViewSearchProductsHook