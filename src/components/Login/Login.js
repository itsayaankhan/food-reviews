import { auth, provider } from '../../firebase';
import React from 'react';
import './Login.css';
import { Button } from '@mui/material';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="login__header">
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F310-3101584_food-logo-png.png&f=1&nofb=1'></img>
        </div>
        <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login