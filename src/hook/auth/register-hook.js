import { useState } from "react"
import notify from "../useNotifaction";

const RegisterHook = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if (name === "") {
            notify("من فضلك ادخل اسم المستخدم", "error")
            return;
        }
        if (phone.length <= 10) {
            notify("من فضلك ادخل رقم هاتف صحيح", "error")
            return;
        }
        if (password != confirmPassword) {
            notify("من فضلك تاكيد من كلمه السر", "error")
            return;
        }

    }

    const OnSubmit = ()=>{
        validationValues();
    }

    return [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword,OnSubmit]
}

export default RegisterHook