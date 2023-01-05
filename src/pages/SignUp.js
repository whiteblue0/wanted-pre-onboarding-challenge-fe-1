import React, {useState} from 'react'
import {signUp} from '../api/auth'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const submitSignUp = async function() {
        const signUpResponse = await signUp(email,password)
        console.log(signUpResponse)
    }
    return (
    <div>
        <div>회원가입</div>
        <label>아이디</label>
        <input type='text' value={email} onChange={emailHandler}/>
        <label>비밀번호</label>
        <input type='password' value={password} onChange={passwordHandler}/>
        
        <button onClick={submitSignUp}>
            <label>가입하기</label>
        </button>
    </div>
    )
}
export default SignUp