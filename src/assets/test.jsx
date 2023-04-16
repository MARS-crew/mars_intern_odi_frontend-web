// import React, { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"

// function LandingPage() {
//   const navigate = useNavigate()
//   useEffect(() => {
//     axios
//       .get("/api/hello") //endpoint. getRequest를 server 즉 index.js로 보내질 것
//       .then((response) => {
//         console.log(response)
//       }) //server 에서 돌아온 response를 콘솔창에 출력해봄
//   }, [])

//   useEffect(() => {
//     if (user) {
//       console.log("check API 성공")
//       console.log(user)

//       navigate("/")
//     }
//   }, [history, user])
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#E3AB9A",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: "20px",
//           boxShadow: "10px 15px 100px #AD5F47",
//           padding: "20px",
//         }}
//       >
//         <img
//           src="./src/assets/retro_logo.png"
//           style={{
//             display: "flex",
//             width: "380px",
//             height: "380px",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "80px",
//             paddingRight: "20px",
//           }}
//         ></img>
//         <div
//           style={{
//             backgroundColor: "white",
//             display: "flex",
//             flexDirection: "column",
//             width: "400px",
//             height: "400px",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "20px",
//           }}
//         >
//           <h2>Welcome! HODI STUDIO</h2>
//           <h5 style={{ textAlign: "center" }}>
//             This site provides information on the <br></br>history and works of
//             our studio. <br></br>Let's talk together! I hope you have a good
//             time.
//           </h5>

//           <button
//             style={{
//               backgroundColor: "#F6F6E9",
//               borderColor: "#FCC944",
//               color: "#7B3911",
//               marginTop: "5px",
//               borderRadius: "10px",
//               textAlign: "center",
//               fontSize: "20px",
//               fontWeight: "bold",
//               width: "350px",
//               height: "60px",
//             }}
//           >
//             Site Go
//           </button>
//           <button
//             style={{
//               backgroundColor: "#F6F6E9",
//               borderColor: "#FCC944",
//               color: "#7B3911",
//               marginTop: "10px",
//               marginBottom: "15px",
//               borderRadius: "10px",
//               textAlign: "center",
//               fontSize: "20px",
//               fontWeight: "bold",
//               width: "350px",
//               height: "60px",
//             }}
//           >
//             Inquiries about lease
//           </button>
//           <div>
//             <button style={{ border: "none", backgroundColor: "transparent" }}>
//               로그인
//             </button>
//             <text>/</text>
//             <button style={{ border: "none", backgroundColor: "transparent" }}>
//               회원가입
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LandingPage
