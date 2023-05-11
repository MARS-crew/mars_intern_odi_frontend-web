const vaildation = ({ name, number }) => {
    const error = { name: '', number: '' }
    if (name === '') {
      error.name = 'Name should not be empty'
    }
    if (number === '') {
      error.number = 'Id should not be empty'
    }
  
    return error
  }
  
  export default vaildation