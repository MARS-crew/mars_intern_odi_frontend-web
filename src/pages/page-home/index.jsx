import { Link } from "react-router-dom"

function LandingPage() {
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
    textCenter: {
      textAlign: "center",
    },
  }

  return (
    <div style={style.container}>
      <div style={style.mainContainer}>
        <img src="./src/assets/retro_logo.png" style={style.mainLogoImg}></img>
        <div style={style.mainView}>
          <h2>Welcome! HODI STUDIO</h2>
          <h5 style={style.textCenter}>
            This site provides information on the <br></br>history and works of
            our studio. <br></br>Let's talk together! I hope you have a good
            time.
          </h5>
          <button style={style.yellowBtn}>Site Go</button>
          <button style={style.yellowBtn}>Inquiries about lease</button>
          <div>
            <Link to="/login" className="Links" style={style.smallBtn}>
              로그인
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

export default LandingPage
