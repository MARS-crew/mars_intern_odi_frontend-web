// ** React Imports
import { useState } from "react"

// ** Router Imports
import { useNavigate } from "react-router-dom"

// ** Other View Imports
import RegisterPageView from "./page-register"

// ** Api Imports
import { useRegisterMutation } from "../../services"

//** Othre Imports
import useInput from "../../hooks/useInput"

const RegisterPage = () => {
  const [user, setUser] = useInput({
    id: "",
    password: "",
    name: "",
    passwordC: "",
  })

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("회원가입을 성공하였습니다.")

  const navigate = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [registerApi] = useRegisterMutation()

  const handleRegister = () => {
    for (const key in user) {
      if (user[key] === "") {
        setMessage(`${key}를 입력하세요.`)
        handleOpen()

        return
      }
    }

    if (user.password !== user.passwordC) {
      setMessage("패스워드와 패스워드 확인이 같지 않습니다.")
      handleOpen()

      return
    }

    registerApi(user)
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
    <RegisterPageView
      open={open}
      handleClose={handleClose}
      handleRegister={handleRegister}
      user={user}
      setUser={setUser}
      message={message}
    />
  )
}

export default RegisterPage
