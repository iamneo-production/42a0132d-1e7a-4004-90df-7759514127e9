import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import './register.css';
import axios from 'axios';

const Signup= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
const navigate = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://127.0.0.1:8181/api/v1/auth/register",
            {
              name:name,
              gmail: email,
              password: password,
              confirmPassword:confirmPassword,
            }
          );
    
          if (response.status === 200) {
            navigate.push("/login");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      };

  return (
    <div className="body1">
    <div name="class1">
    
      <center><h1>Register Form</h1></center>
      <br/>
      <form className="form1">
        <label className="name1">
          Name: 
        </label>
        <div className="fld1">
          <input
            type="text"
            value={name}
            name = "name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>
        <label className="name2">
          Email:
        </label>
        <div className="fld2">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
        <label className="name3">
          Password:
        </label>
        <div className="fld3">
          <input
            type="password"
            value={password}
            name = "password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <label className="name3">
            ConfirmPassword:
          </label>
          <div className="fld3">
            <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required/>
          </div>
          {error && <p className="error-message">{error}</p>}

        <br/>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
        <div className='back'>
          <h4>Already have an account <a href="/login"> Sign in</a></h4>
        </div>
        
      </form>
      </div>
    </div>
  );
  }
export default Signup