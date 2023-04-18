import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Vaildation from './LoginValidation';
import axios from 'axios';

function Login() {

    const [values, setvalues] = useState({
        email: '',
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
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/home');
                } else {
                    alert('Invalid email or password');
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email'
                            className='form-control rounded-0' onChange={handleInput} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <p>Don't have id? Please make your Account</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
