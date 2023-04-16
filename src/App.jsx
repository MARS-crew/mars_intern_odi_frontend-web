// ** Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/page-home"
import LoginPage from "./pages/page-login"
import RegisterPage from "./pages/page-register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
