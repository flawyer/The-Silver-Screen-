import React from 'react';

function Loginform(){
    return(
       <>
       <div className="loginform">
       <input type="text" className ="embody"placeholder="Email or Phone Number" autofocus="1" aria-label="Email or Phone Number"/> 
        <div className="emspace" >
          <input type="password" className ="empass" placeholder="Password" aria-label="Password"/>
        </div>
        <div ClasssName="bot"><button type="button" className="btn text-secondary">Log In</button></div>
        <div className="Fat text-secondary"><p >Forgot password?</p> 
        </div>
        <div className="line"></div>
        <div className="cen">
        <button type="button" className="btnI text-secondary">Create New Account</button>
        </div>
       </div>
       
     </>)
     ;
    }

export default Loginform;