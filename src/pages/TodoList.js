import React, {useState} from 'react'
import { login } from '../api/auth'
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const emailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const submitLogin = async function() {
        const loginResponse = await login(email,password)
        console.log(loginResponse)
        alert('로그인 성공')
        if (loginResponse) {
            navigate('/')
        }
    }
    return (
    <div>
        <div>로그인</div>
        <label>아이디</label>
        <input type='text' value={email} onChange={emailHandler}/>
        <label>비밀번호</label>
        <input type='password' value={password} onChange={passwordHandler}/>
        <button onClick={submitLogin}>로그인</button>
    </div>
    )
}
export default Auth