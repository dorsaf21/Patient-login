import React from 'react'
import './style.css'
import { useState } from 'react';

function LoginRegister() 
{
    const [slectedOption , setslectedOption] = useState(1);
    // login element
    const login = 
    (
        <>
            <h3>Log in</h3>
            <label for="loginEmail">Email</label>
            <input type="email" name='email'  id='loginEmail'/>
            <label for="LoginPassword">Password</label>
            <input type="password" name="password" id='LoginPassword'/>
            <button type='submit' >SingIn</button>
        </>
    )
    // register element
    const register = 
    (
        <>
           <h2>Create an account</h2>
            <p>Sign up now and unlock exclusive access!</p>
            <form action="">
                <label for="name">Your Name</label> 
                <input type="text" id="name" placeholder="First & Last" />
                <label for="mail">Email</label>
                <input type="email" id="mail" placeholder="you@email.com" />
                <label for="psw">Password</label>
                <input type="password" id="psw" placeholder="at least 8 characters" name="password"  />
                <label for="cfpsw">Confirm Password</label>
                <input type="password" id="cfpsw" placeholder="Password Confirmation " />
                <button id="sub" type="submit">Create account</button>
            </form>
        </>
    )
    // gtting the selected option (log in or logout)
    function singin(event) 
    {
        const selected = event.target.innerText;
        selected ==='SingIn' ? setslectedOption(1) : setslectedOption(2);
    }


  return (
    <div className="container">
        <div className="right-side">
            <img src="./log.png" alt="" srcset="" />
            <h4>
               <p>Your <span style={{color:'white', backgroundColor:'#a8c0d3', padding:'4px'}}>Health</span> </p>  
               <p>Is Our <span style={{color:'white', backgroundColor: '#bc8e92', padding: '4px'}}>Responsibility</span> </p>  
            </h4>
        </div>
        <div className="left-side">
            <div className='toggle'>
                <button onClick={singin} className={slectedOption === 1 ? 'selected': ''}>SingIn</button>
                <button onClick={singin} className={slectedOption === 2 ? 'selected': ''}>Register</button>
            </div>
            <div className='loginregister'>
                {slectedOption === 1 ? login : register}
            </div>
            <div className="help">
                
                <p>
                    <i className="fa-regular fa-envelope-open fa-sm"></i>
                    Help@Health.com
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginRegister