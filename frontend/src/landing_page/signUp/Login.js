import React, { useState } from 'react';
import axios from "axios";
import styles from './Login.module.css';

function Login() {
  const [info, setInfo] = useState({
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
    const { email, password } = info;

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/auth/login", {
        email,
        password
      });

      const { success, message, jwtToken, name } = res.data;

      if (success) {
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        window.location.href = `http://localhost:3001?token=${jwtToken}&name=${name}`;
      } else {
        alert(message || "Login failed");
      }

    } catch (err) {
      alert("Some error occurred during login.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <i className="fas fa-user"></i>
            <input
              type='text'
              name='email'
              placeholder='Type your email'
              onChange={handleinfo}
              value={info.email}
            />
          </div>

          <div className={styles.inputGroup}>
            <i className="fas fa-lock"></i>
            <input
              type='password'
              name='password'
              placeholder='Type your password'
              onChange={handleinfo}
              value={info.password}
            />
          </div>

          <div className={styles.forgot}>Forgot password?</div>

          <button type='submit'>LOGIN</button>
        </form>

        <div className={styles.divider}>Or Sign Up Using</div>

        <div className={styles.socialIcons}>
          <i className={`fab fa-facebook-f ${styles.fb}`}></i>
          <i className={`fab fa-twitter ${styles.tw}`}></i>
          <i className={`fab fa-google ${styles.goo}`}></i>
        </div>

        <div className={styles.signupText}>
          Or Sign Up Using <a href="/signup">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
