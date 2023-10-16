import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';

import add from '../../images/add.png';

import AdminAddProductsHook from './../../hook/product/add-products-hook'
const [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSelectCategory, handelSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName] =
    AdminAddProductsHook();


const AdminAddProducts = () => {
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
                        onChange={onChangeProdName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDescription}
                        onChange={onChangeDesName}
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefore}
                        onChange={onChangePriceBefor}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAftr}
                        onChange={onChangePriceAfter}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" السعر بعد الخص"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                        value={qty}
                        onChange={onChangeQty}
                    />
                    <select name="category" id="cat" className="select mt-3 px-2 " onChange={onSelectCategory}>
                        <option value="0">اختر تصنيف </option>
                        {
                            category.data ? (
                                category.data.map((item,index) => {
                                    return (<option key={index} value={item._id}>{item.name}</option>)
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
                                brand.data.map((item,index) => {
                                    return (<option key={index} value={item._id}>{item.name}</option>)
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

                        <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        }


                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default AdminAddProducts