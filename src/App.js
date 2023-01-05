import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth, SignUp, Home } from './pages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}

export default App