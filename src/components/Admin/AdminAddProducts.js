import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'

import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getSubCategory } from '../../redux/actions/subcategoryAction';

const AdminAddProducts = () => {

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)

    }

    const [images, setImages] = useState([])
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    // user chosse
    const [seletedSubID, setSeletedSubID] = useState([]);

    const [loading, setLoading] = useState(true);
    const [showColor, setShowColor] = useState(false);
    const [colors, setColors] = useState([]);
    const [options, setOptions] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!navigator.onLine) {
            console.log("هناك مشكله فى الاتصال بالانترنت", "warn")
            return;
        }
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [])

    const category = useSelector(state => state.allCategory.category)
    const brand = useSelector(state => state.allBrand.brand)
    const subcategory = useSelector(state => state.subCategory.subcategory)

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

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />
                    <input
                        value={prodName}
                        onChange={(e) => setProdName(e.target.values)}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDescription}
                        onChange={(e) => setProdDescription(e.target.values)}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefore}
                        onChange={(e) => setPriceBefore(e.target.values)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAftr}
                        onChange={(e) => setPriceAftr(e.target.values)}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" السعر بعد الخص"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value={qty}
                        onChange={(e) => setQty(e.target.values)}
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 " onChange={onSelectCategory}>
                        <option value="0">اختر تصنيف </option>
                        {
                            category.data ? (
                                category.data.map((item) => {
                                    return (<option key={item._id} value={item._id}>{item.name}</option>)
                                })
                            ) : null
                        }
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select name="brand" id="bra" className="select mt-3 px-2 " onChange={onSelectBrand}>
                        <option value="0">اختر الماركة </option>
                        {
                            brand.data ? (
                                brand.data.map((item) => {
                                    return (<option key={item._id} value={item._id}>{item.name}</option>)
                                })
                            ) : null
                        }
                    </select>

                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">

                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })
                            ) : null
                        }

                        <img onClick={() => setShowColor(!showColor)} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        }


                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts