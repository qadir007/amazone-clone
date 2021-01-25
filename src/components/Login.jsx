import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../css/Login.css'
import { auth } from '../firebase';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))
    }

    const handleRegister = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if(auth) history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login"> 
            <Link to='/'>
                <img 
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt="amazon logo"
                />            
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className="login__signInBtn" onClick={handleSignIn}> Sign In</button>
                </form>

                <p>By signing-in you agree to the Amazon conditions of use & sale.
                    Please see our privacy notice, our cookies notice and our
                    Interest-Based ads notice
                </p>

                <button className="login__registerBtn" onClick={handleRegister}>Create your new amazon account</button>
            </div>
        </div>
    )
}
