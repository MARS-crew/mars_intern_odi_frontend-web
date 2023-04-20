import axios from "axios"
import { useState } from "react"
const registerPage = () => {
  // data  > message "회원가입 성공"
  //
  // responseData : { name, "good" }
  const [userData, setUserData] = useState()
  const [idValue, setId] = useState("")
  const [pwValue, setPw] = useState("")
  const [nameValue, setName] = useState("")

  const saveUserId = (event) => {
    setId(event.target.value)
  }
  const saveUserPw = (event) => {
    setPw(event.target.value)
  }
  const saveUserName = (event) => {
    setName(event.target.value)
  }

  const register = async () => {
    await axios
      .post("/api/user", {
        id: idValue,
        password: pwValue,
        name: nameValue,
      })
      .then((res) => {
        if (res.data.code === "SUCCESS") {
          alert("회원가입 완료")
          setUserData(res.data)
        } else if (
          res.data.message.includes("query did not return a unique result: 2")
        ) {
          alert("이미 회원가입 된 유저입니다.")
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
      height: "600px",
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
      border: "none",
      backgroundColor: "transparent",
    },
    notiRedBtn: {
      border: "none",
      backgroundColor: "transparent",
      color: "#7B3911",
      fontSize: "13px",
      fontWeight: "bold",
      marginBottom: "40px",
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
          <button style={style.notiRedBtn}>
            Tip. 회원가입에 문제가 발생하셨다면?
          </button>
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
            <label>Name</label>
            <input
              style={style.infoInput}
              type="text"
              placeholder="이름을 입력해주세요."
              value={nameValue}
              onChange={saveUserName}
            />
            <button onClick={() => register()} style={style.yellowBtn}>
              회원 가입
            </button>
          </div>
          <div>
            <button style={style.smallBtn}>홈으로</button>
            <span>|</span>
            <button style={style.smallBtn}>로그인</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default registerPage
