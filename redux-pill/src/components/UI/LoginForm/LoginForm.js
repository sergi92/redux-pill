import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';

import NavBar from '../NavBar';
import { login } from '../../../redux/user/actions';


export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData, setuserData] = useState('');
    const handleChange = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(userData));

        // navigate('/');
    }
    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL</label>
                <input type="text" name="email" placeholder="E-mail" onChange={handleChange} />
                <br />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="submit" value="Login" />
            </form>

            <p>Don't have an account? Register <span><Link to="/register">here</Link></span></p>
        </>
    )
}