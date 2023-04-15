// ** React Imports
import { useState } from "react"

// ** Router Imports
import { useNavigate } from "react-router-dom"

// ** Other View Imports
import LoginPageView from "./page-login"

// ** Other Imports
import useInput from "../../hooks/useInput"
import { useLoginMutation } from "../../services"

const LoginPage = () => {
  const [user, setUser] = useInput({ id: "", password: "" })
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [loginApi] = useLoginMutation()

  const handleLogin = () => {
    for (const key in user) {
      if (user[key] === "") {
        setMessage(`${key}를 입력하세요.`)
        handleOpen()

        return
      }
    }

    loginApi(user)
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          navigate("/")

          return
        }
        setMessage(res.message)
        handleOpen()
      })
      .catch((err) => {
        console.log("ERROR : ", err)
        setMessage(err.message)
        handleOpen()
      })
  }
  return (
    <LoginPageView
      user={user}
      setUser={setUser}
      handleLogin={handleLogin}
      open={open}
      handleClose={handleClose}
      message={message}
    />
  )
}

export default LoginPage
