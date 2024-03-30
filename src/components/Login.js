import React, { useState } from 'react'
import XIcon from '@mui/icons-material/X';

import { useDispatch } from 'react-redux';
import { login } from '../feature/userSlice';
import './Login.css';
import { auth } from '../firebase'

export default function Login() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();


    const handleSignIn = (e) => {
        if (!fullname) {
            return alert("Please enter your fullname!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: fullname,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: fullname,
                            photoURL: profilePic,
                        }))
                    })
            }).catch(error => alert(error.message));
    }



    const handleLoginIn = (e) => {

        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            }).catch(error => alert(error.message));
    }

    return (
        <div className="login">

            <div className='login__container'>
                <XIcon style={{ fontSize: '2.5rem', color: "var(--twitter-color)" }} />
                <h1>Join X now</h1>
                <form className='login__form'>
                    <input placeholder='Full name (required if registering)'
                        type='text'
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                    />
                    <input placeholder='Email'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <input placeholder='Password'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <input placeholder='Profile pic URL (optional)'
                        type='text'
                        value={profilePic}
                        onChange={e => setProfilePic(e.target.value)} />
                </form>
                <button className="login__button" type='submit' onClick={handleLoginIn}>Log In</button>
                <p>
                    Not a member?{" "}
                    <span onClick={handleSignIn} >
                        Sign In Now</span>
                </p>

            </div>
        </div>
    )
}
