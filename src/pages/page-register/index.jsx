import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../_actions/user_action"
import { registerUser } from "../../_actions/user_action"
import { withRouter } from "react-router-dom"

function RegisterPage(props) {
  const dispatch = useDispatch()

  const [Email, setEmail] = React.useState(" ")
  const [Password, setPassword] = React.useState(" ")
  const [Name, setName] = React.useState(" ")
  const [ConfirmPassword, setConfirmPassword] = React.useState(" ")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault() //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능

    // console.log('Email', Email);
    // console.log('Password', Password);

    //비밀번호와 비밀번호 확인 같을띠 회원가입 되게 함
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
    } //여기서 걸리면 아래로 못감

    let body = {
      email: Email,
      password: Password,
      name: Name,
    }

    //디스패치로 액션 취하기
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login")
      } else {
        alert("Failed to sign up")
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button>회원 가입</button>
      </form>
    </div>
  )
}

//export default RegisterPage

export default withRouter(RegisterPage)
