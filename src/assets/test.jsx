import React, { useEffect } from "react"
import axios from "axios"

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data))
  }, [])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#E3AB9A",
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
            height: "400px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
          }}
        >
          <h2>Welcome! HODI STUDIO</h2>
          <h5 style={{ textAlign: "center" }}>
            This site provides information on the <br></br>history and works of
            our studio. <br></br>Let's talk together! I hope you have a good
            time.
          </h5>

          <button
            style={{
              backgroundColor: "#F6F6E9",
              borderColor: "#FCC944",
              color: "#7B3911",
              marginTop: "5px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              width: "350px",
              height: "60px",
            }}
          >
            Site Go
          </button>
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
            Inquiries about lease
          </button>
          <div>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              로그인
            </button>
            <text>/</text>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
