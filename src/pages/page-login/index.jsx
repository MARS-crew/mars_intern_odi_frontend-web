import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [userName, setUserName] = useState()
  const [idValue, setId] = useState("")
  const [pwValue, setPw] = useState("")

  const saveUserId = (event) => {
    setId(event.target.value)
  }
  const saveUserPw = (event) => {
    setPw(event.target.value)
  }

  const login = async () => {
    await axios
      .post("http://phone.pinodev.shop:8000/api/user/login", {
        id: idValue,
        password: pwValue,
      })
      .then(async (res) => {
        if (res.data.code === "SUCCESS") {
          alert("로그인 성공!!")
          const { accessToken, refreshToken, name } = res.data.responseData

          // 토큰 로컬에 저장
          localStorage.setItem("accessToken", accessToken)
          localStorage.setItem("refreshToken", refreshToken)
          // 유저 정보 저장
          setUserName(name)
        } else if (res.data.status === 401) {
          // 토큰 만료됨
          const refreshToken = localStorage.getItem("refreshToken")
          await axios
            .post("http://phone.pinodev.shop:8000/api/user/token", {
              refreshToken,
            })
            .then((res) => {
              const { accessToken, refreshToken, name } = res.data.responseData

              // 토큰 로컬에 저장
              localStorage.setItem("accessToken", accessToken)
              localStorage.setItem("refreshToken", refreshToken)
            })
        }
      })
  }
  const style = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      backgroundColor: "#E3AB9A",
    },
    mainContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "20px",
      boxShadow: "10px 15px 100px #AD5F47",
      padding: "20px",
    },
    mainLogoImg: {
      display: "flex",
      width: "380px",
      height: "380px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "80px",
      paddingRight: "20px",
    },
    mainView: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      width: "400px",
      height: "400px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "20px",
    },
    yellowBtn: {
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
    },
    smallBtn: {
      textDecoration: "none",
      fontSize: 12,
      margin: 5,
      color: "black",
    },
    notiRedBtn: {
      color: "#7B3911",
      fontSize: "13px",
      fontWeight: "bold",
      marginBottom: "40px",
      textDecoration: "none",
    },
    infoInput: {
      outline: "none",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      borderBottom: "2px solid #7B3911",
      transition: "border-color 0.3s ease-in-out",
      marginBottom: "20px",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
  }
  return (
    <div style={style.container}>
      <div style={style.mainContainer}>
        <img src="./src/assets/retro_logo.png" style={style.mainLogoImg}></img>
        <div style={style.mainView}>
          <h2>Welcome! HODI STUDIO</h2>
          <div>
            {userName ? (
              <div>
                <span style={style.notiRedBtn}>
                  당신의 접속을 환영합니다. {userName}님
                </span>
              </div>
            ) : (
              <Link to="/register" style={style.notiRedBtn}>
                Tip. 로그인에 문제가 발생하셨나요?
              </Link>
            )}
          </div>

          <div style={style.formContainer}>
            <label>Id</label>
            <input
              style={style.infoInput}
              type="text"
              placeholder="아이디를 입력해주세요."
              value={idValue}
              onChange={saveUserId}
            />
            <label>Password</label>
            <input
              style={style.infoInput}
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={pwValue}
              onChange={saveUserPw}
            />
            <button onClick={() => login()} style={style.yellowBtn}>
              Login
            </button>
          </div>
          <div>
            <Link to="/" className="Links" style={style.smallBtn}>
              홈으로
            </Link>
            <span>|</span>
            <Link to="/register" className="Links" style={style.smallBtn}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
