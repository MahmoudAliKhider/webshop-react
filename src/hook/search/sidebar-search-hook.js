import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import ViewSearchProductsHook from "../product/view-search-products-hook";

const SidebarSearchHook = () => {

    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        const get = async () => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, [])

    const allCat = useSelector(state => state.allCategory.category)
    const allBrand = useSelector(state => state.allBrand.brand)

    let category = [];
    if (allCat.data)
        category = allCat.data

    let brand = [];
    if (allBrand.data)
        brand = allBrand.data

    var queryCat = "", queryBrand = "";
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();

    const [catChecked, setCatChecked] = useState([]);

    const clickCategory = (e) => {
        let value = e.target.value;
        if (value === '0') {
            setCatChecked([])
        } else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if (e.target.checked === false) {
                const newArray = catChecked.filter((e) => e !== value)
                setCatChecked(newArray)
            }
        }
    }

    useEffect(() => {
        queryCat = catChecked.map(val => "category[in][]=" + val).join("&");
        localStorage.setItem("catCecked", queryCat)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [catChecked])

    const [brandChecked, setBrandChecked] = useState([])

    const clickBrand = (e) => {
        let value = e.target.value;
        if (value === '0') {
            setBrandChecked([])
        } else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if (e.target.checked === false) {
                const newArray = catChecked.filter((e) => e !== value)
                setBrandChecked(newArray)
            }
        }
    }

    useEffect(() => {
        queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
        localStorage.setItem("brandCecked", queryBrand)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [brandChecked])


    const [From, setPriceFrom] = useState(0)
    const [To, setToFrom] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem("priceFrom", e.target.value)

        setPriceFrom(e.target.value)
    }
    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value)
        setToFrom(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [From, To])

    return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]
}

export default SidebarSearchHook