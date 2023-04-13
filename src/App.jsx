// ** Router Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
