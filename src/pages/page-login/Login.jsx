import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Vaildation from './LoginValidation';

function Login() {

    const [values, setvalues] = useState({
        id: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, seterrors] = useState({})

    const handleInput = (e) => {
        setvalues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        seterrors(Vaildation(values));
        if (errors.id === "" && errors.password === "") {
            axios.post("http://phone.pinodev.shop:8000/api/user/login", values)
            .then((res) => {
                if (res.data.status === 200) {
                    navigate('/phonebook');
                } else {
                    alert('Invalid id or password');
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='auth-form-container'>
            <div className='login-form'>
                <h2>Login</h2>
                        <label htmlFor='id'><strong>Id</strong></label>
                        <input placeholder='Enter Id' id='id' name='id' onChange={handleInput} />
                        {errors.id && <span id='text-danger'>{errors.id}</span>}
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                            onChange={handleInput} id='password' />
                            {errors.password && <span id='text-danger'>{errors.password}</span>}
                    <button onClick={handleSubmit} type='submit' >Login</button>
                    <p>Don't have id? Please make your Account</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
             </div>
        </div>
    )
}

export default Login;
