function Vaildation(values) {
    let error = {}
    //최소 8자 이상의 영문 대소문자와 숫자가 모두 포함된 패스워드
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    else{
        error.name=""
    }

    if(values.id === ""){
        error.id = "Id should not be empty"
    }
    else{
        error.id=""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    // else if(!password_pattern.test(values.password)) {
    //     error.password = "Password didn't match"
    // }
    else {
        error.password = ""
    }
    return error;
}

export default Vaildation