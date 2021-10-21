import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import './Login.css'


const Login = () => {
    const auth = getAuth();
    const [email,setEmail] =useState('');
    const [password,setPasswors] =useState('');
    const [error, setError] =useState('');
    const varifyEmail  =() =>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{

        })
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPasswors(e.target.value)
    }
    const handleLogin =e =>{
        e.preventDefault();
        if (password.length<6){
            setError('password Must be at least 6 characters.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            
            const users =result.users;
            setEmail(users)
            setError('');
            varifyEmail()
          })
          .catch (error =>{
              setError(error.message);
          })
        
    }
    const { singaIngoogle} =UseAuth();
    const location =useLocation();
    const history = useHistory();
    const redirect_url =location.state?.from||'/home';
    const handleGoogleLogin =() =>{
        singaIngoogle()
        .then(result =>{
            history.push(redirect_url);
        });
    }
    return (
        <div className="login-form">
            <div>
                {/* login form section  */}
                <h2>login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" name="" onBlur ={handleEmailChange} placeholder="your email" required/>
                    <br />
                    <br />
                    <input type="password" onBlur ={handlePasswordChange} placeholder="your password" required/>
                    <br />
                    <div className="text-danger">{error}</div>
                    <input type="submit" className="btn btn-warning" value="submit" />
                </form>
                <p>New to medlife? <Link to="/register">Create Account</Link></p>
                <div>------------or----------</div>
                {/* google login  */}
                <button onClick ={handleGoogleLogin} className="btn btn-warning">google login</button>
            </div>
            
        </div>
    );
};

export default Login;