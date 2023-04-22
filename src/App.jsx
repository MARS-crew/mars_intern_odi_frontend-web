import './App.css'
import Login from './pages/page-login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/page-register/Signup'
import Home from './pages/page-home/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/home' element={<Home />}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
