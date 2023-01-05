import React, {useState} from 'react'
import { login } from '../api/auth'
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isInputValidate, setIsInputValidate] = useState(false)
    const navigate = useNavigate()
    const emailHandler = (event) => {
        setEmail(event.currentTarget.value)
        console.log('validateLogin: ', validateLogin(event.currentTarget.value, password))
        setIsInputValidate(validateLogin(event.currentTarget.value, password))
        console.log('isInputValidate: ', isInputValidate)
    }
    const passwordHandler = (event) => {
        setPassword(event.currentTarget.value)
        console.log('validateLogin: ', validateLogin(email, event.currentTarget.value))
        setIsInputValidate(validateLogin(email, event.currentTarget.value))
        console.log('isInputValidate: ', isInputValidate)
    }
    const submitLogin = async function() {
        const loginResponse = await login(email,password)
        console.log(loginResponse)
        alert('로그인 성공')
        if (loginResponse) {
            navigate('/')
        }
    }
    const validateLogin = function(email, password) {
        console.log('login: ', validateEmail(email))
        console.log('password: ', validatePassword(password))
        return (validateEmail(email) && validatePassword(password))
    }
    const validateEmail = function(email) {
        if (!email) {
            return false
        }
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        // console.log(regex.test(email))
        return regex.test(email)
    }
    const validatePassword = function(password) {
        if (!password) {
            return false
        }
        return (password.length >= 8)
    }
    return (
    <div>
        <div>로그인</div>
        <label>아이디</label>
        <input type='text' value={email} onChange={emailHandler}/>
        <label>비밀번호</label>
        <input type='password' value={password} onChange={passwordHandler}/>
        <button onClick={submitLogin} disabled={!isInputValidate}>로그인</button>
    </div>
    )
}
export default Auth