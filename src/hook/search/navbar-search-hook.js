import { useState } from "react"
import ViewSearchProductsHook from "../../hook/product/view-search-products-hook";
import { useEffect } from "react";

const NavbarSearchHook = () => {
    const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();

    const [searchword, setSearchword] = useState('');

    const onChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value)
        setSearchword(e.target.value)

        const path = window.location.pathname;
        if (path !== "/products") {
           window.location.href = "/products"
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000)
    }, [searchword]);
    return [onChangeSearch, searchword]
}

export default NavbarSearchHook