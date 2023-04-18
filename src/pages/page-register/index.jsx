import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../../_actions/user_action"
import { registerUser } from "../../_actions/user_action"
import { useParams, useLocation, useNavigate } from "react-router-dom"
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20px",
          boxShadow: "10px 15px 100px #AD5F47",
          padding: "20px",
        }}
      >
        <img
          src="./src/assets/retro_logo.png"
          style={{
            display: "flex",
            width: "380px",
            height: "380px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "80px",
            paddingRight: "20px",
          }}
        ></img>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            height: "600px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <h2>Welcome! HODI STUDIO</h2>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#7B3911",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            Tip. 회원가입에 문제가 발생하셨다면?
          </button>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
            onSubmit={onSubmitHandler}
          >
            <label>Email</label>
            <input
              style={{
                outline: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "2px solid #7B3911",
                transition: "border-color 0.3s ease-in-out",
                marginBottom: "20px",
              }}
              type="email"
              value={Email}
              onChange={onEmailHandler}
            />

            <label>Name</label>
            <input
              style={{
                outline: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "2px solid #7B3911",
                transition: "border-color 0.3s ease-in-out",
                marginBottom: "20px",
              }}
              type="text"
              value={Name}
              onChange={onNameHandler}
            />

            <label>Password</label>
            <input
              style={{
                outline: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "2px solid #7B3911",
                transition: "border-color 0.3s ease-in-out",
                marginBottom: "20px",
              }}
              type="password"
              value={Password}
              onChange={onPasswordHandler}
            />

            <label>Confirm Password</label>
            <input
              style={{
                outline: "none",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "2px solid #7B3911",
                transition: "border-color 0.3s ease-in-out",
                marginBottom: "20px",
              }}
              type="password"
              value={ConfirmPassword}
              onChange={onConfirmPasswordHandler}
            />

            <br />
            <button
              style={{
                backgroundColor: "#F6F6E9",
                borderColor: "#FCC944",
                color: "#7B3911",
                marginTop: "10px",
                marginBottom: "15px",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                width: "350px",
                height: "60px",
              }}
            >
              회원 가입
            </button>
          </form>
          <div>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              홈으로
            </button>
            <span>|</span>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

//export default withRouter(RegisterPage)
