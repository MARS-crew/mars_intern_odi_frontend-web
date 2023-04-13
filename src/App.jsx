// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/\bpage-home'
import LoginPage from './pages/page-login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
