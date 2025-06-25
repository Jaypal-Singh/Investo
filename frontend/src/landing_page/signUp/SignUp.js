import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleinfo = (e) => {
    const { name, value } = e.target;
    setInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = info;

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
    name,
    email,
    password
  });
  console.log(res.data);
  
  if (res.data.success) {
    navigate('/login');
  } else {
    alert(res.data.message || "Signup failed. Try again.");
  }

} catch (err) {
  if (err.response && err.response.data && err.response.data.message) {
    alert(err.response.data.message);
  } else {
    alert("An error occurred. Please try again later.");
  }
  console.error(err);
}

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter name'
            onChange={handleinfo}
            value={info.name}
          />

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Enter email'
            onChange={handleinfo}
            value={info.email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handleinfo}
            value={info.password}
          />

          <button type='submit'>SIGN UP</button>
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
