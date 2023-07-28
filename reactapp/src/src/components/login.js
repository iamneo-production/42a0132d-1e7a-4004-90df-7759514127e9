import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./login.css"

const LoginPage = () => {
  const navigate = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        gmail: email,
        password: password,
      });

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate.push("/");
    
    } catch (error) {
      console.error('Error: ', error);
      alert("User not found. Please check your credentials.");
    }
  };

  return (
    <div className="body1">
      <div name="class1">
        <center>
          <h1>Login Form</h1>
        </center>
        <br />
        <form className="form1" >
          <label className="name2">Email:</label>
          <div className="fld2">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label className="name3">Password:</label>
          <div className="fld3">
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <br />
          
          <button type="submit" onClick={handleSubmit}>Log In</button>
          
            <h4>Need an account? <a href="/signup">Signup now</a></h4>
          
        </form>
      </div>
     
    </div>
  );
};

export default LoginPage;
