import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';
import { getAllProductsSearch } from "../../redux/actions/productsAction"
const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    let limit = 5;

    const getProduct = async () => {
        sortData();
        getStorge();
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`))

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
        sortData();
        getStorge();
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`))
    }

    let pricefromString = "", priceToString = ""
    let word = "", queryCat = "", brandCat = "", priceTo = "", priceFrom = "";
    const getStorge = () => {
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")
        if (localStorage.getItem("catCecked") != null)
            queryCat = localStorage.getItem("catCecked")
        if (localStorage.getItem("brandCecked") != null)
            brandCat = localStorage.getItem("brandCecked")
        if (localStorage.getItem("priceTo") != null)
            priceTo = localStorage.getItem("priceTo")
        if (localStorage.getItem("priceFrom") != null)
            priceFrom = localStorage.getItem("priceFrom")

        if (priceFrom === "" || priceFrom <= 0) {
            pricefromString = ""
        } else {
            pricefromString = `&price[gt]=${priceFrom}`
        }

        if (priceTo === "" || priceTo <= 0) {
            priceToString = ""
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }

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