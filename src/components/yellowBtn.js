function yellowBtn(props) {
  const style = {
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
  }

  return <button style={style.yellowBtn}>{props.name}</button>
}

export default yellowBtn
