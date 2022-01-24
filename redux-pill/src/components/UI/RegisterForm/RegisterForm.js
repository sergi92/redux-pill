import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../NavBar';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../redux/user/actions';

export default function RegisterForm() {

  const [userData, setuserData] = useState({});


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {

    setuserData({
      ...userData,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(userData));

  }
  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">USERNAME</label>
        <br />
        <input type="text" name="name" placeholder="username" onChange={handleChange} />
        <br />
        <label htmlFor="email">E-MAIL</label>
        <br />
        <input type="text" name="email" placeholder="e-mail" onChange={handleChange} />
        <br />
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <br />
        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
        <br />
        <input type="password" name="confirm_password" placeholder="Password" onChange={handleChange} />
        <br />
        <input type="submit" value="register" />
      </form>
    </>
  )
}