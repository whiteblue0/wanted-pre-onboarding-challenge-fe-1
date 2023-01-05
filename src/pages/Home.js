import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    const buttonStyle= {
        marginRight: '10px'
    }
    return (
    <div>
        <div>Todo-list</div>
        <Link to='/auth'>
            <button style={buttonStyle}>
                로그인
            </button>
        </Link>
        <Link to='/signup'>
            <button>
                회원가입
            </button>
        </Link>
    </div>
    )
}
export default Home