import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Vaildation from './SignupValidation';
import axios from 'axios';

function Signup() {

    const [values, setValues] = useState({
        name: "",
        id: "",
        password: ""
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        seterrors(Vaildation(values));
        if(errors.name === "" && errors.id === "" && errors.password === ""){
            axios.post('http://phone.pinodev.shop:8000/api/user',values)
                .then((res) => {
                    navigate('/');
                })
                .catch(err => console.log(err));

        }
    }

  return (
    <div className='auth-form-container'>
    <div className='register-form'>
        <h2>Sign-up</h2>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type='name' name='name' placeholder='Enter Name' 
                onChange={handleInput}/>
                {errors.name && <span id='text-danger'>{errors.name}</span>}
     
                <label htmlFor='id'><strong>Id</strong></label>
                <input placeholder='Enter Id' name='id' 
                onChange={handleInput} />
                {errors.id && <span id='text-danger'>{errors.id}</span>}
        

                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password' 
                onChange={handleInput} />
                {errors.password && <span id='text-danger'>{errors.password}</span>}
           
            <button type='submit' onClick={handleSubmit} >Sign up</button>
            <p>Already have account? Login!</p>
            <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
      
    </div>
</div>
  )
}

export default Signup