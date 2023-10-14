import { useEffect, useState } from 'react'
import avatar from '../../images/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { createBrand } from "../../redux/actions/brandAction";
import notify from '../../hook/useNotifaction';

const AddBrandHook = () => {
    const dispatch = useDispatch();

    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectFile, setSelectFile] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const res = useSelector(state => state.allBrand.brand);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectFile(event.target.files[0]);
        }
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    //save data
    const handelSubmit = async (event) => {
        event.preventDefault();
        if (name === '' || img === null) {
            notify("اضف البيانات", "warn");
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", selectFile)
        setLoading(true)
        setIsPress(true);
        await dispatch(createBrand(formData))
        setLoading(false)

    }

    useEffect(() => {
        if (loading === false) {
            setImg(avatar)
            setName("")
            setSelectFile(null)
            setLoading(true)
            setTimeout(() => setIsPress(false), 1000)
            if (res.status === 201) {
                notify('تمت اضافة العملية بنجاح', "success")
            } else {
                notify('هناك مشكلة عند اضافة العملية ', "error")
            }
        }
    }, [loading])
    
    return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName]
};
export default AddBrandHook