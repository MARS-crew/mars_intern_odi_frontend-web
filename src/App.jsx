// ** Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/page-home"
import LoginPage from "./pages/page-login"
import RegisterPage from "./pages/page-register"

import { ProtectRoute, PublicRoute } from "./utils/protect-route"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
