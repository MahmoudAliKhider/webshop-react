
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getSubCategory } from '../../redux/actions/subcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';

const AdminAddProductsHook = () => {
    const [images, setImages] = useState([])
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    // user chosse
    const [seletedSubID, setSeletedSubID] = useState([]);

    const [loading, setLoading] = useState(true);
    const [showColor, setShowColor] = useState(false);
    const [colors, setColors] = useState([]);
    const [options, setOptions] = useState([]);


    const category = useSelector(state => state.allCategory.category)
    const brand = useSelector(state => state.allBrand.brand)
    const subcategory = useSelector(state => state.subCategory.subcategory)
    const product = useSelector(state => state.allproducts.products);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!navigator.onLine) {
            console.log("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [])

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    const onSelectCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getSubCategory(e.target.value))
        }
        setCatID(e.target.value)
    }

    useEffect(() => {
        if (subcategory.data) {
            setOptions(subcategory.data)
        }
    }, [CatID])

    const onSelectBrand = (e) => {
        e.persist();
        SetBrandID(e.target.value)
    }

    const handelChangeComplete = (color) => {
        setShowColor(!showColor);
        setColors([...colors, color.hex]);
    }

    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor);
    }

    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }


    const handelSubmit = async (e) => {
        e.preventDefault();

        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            console.log("من فضلك اكمل البيانات", "warn")
            return;
        }

        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            })

        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("imageCover", imgCover);
        formData.append("category", CatID);
        formData.append("brand", BrandID);

        colors.map((color) =>
            formData.append("availableColors", color)
        )
        seletedSubID.map((item) => formData.append("subcategory", item._id))

        itemImages.map((image) => formData.append("images", image))

        setLoading(true)
        await dispatch(createProduct(formData))
        setLoading(false)
    }


    useEffect(() => {

        if (loading === false) {
            // setCatID(0)
            setColors([])
            setImages([])
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAftr('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSeletedSubID([])
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 201) {
                    console.log("تم الاضافة بنجاح", "success")
                } else {
                    console.log("هناك مشكله", "error")
                }
            }
        }
    }, [loading])
    return [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSelectCategory, handelSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName]

}

export default AdminAddProductsHook