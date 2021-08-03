import React from 'react';
import Heading from './Login/Heading/Heading';
import Recent from './Login/Recent Logins/Recentlogin';
import "G:/The Silver Screen/thesilverscreen/src/Login/Heading/ResponsiveHeader.css";
import "G:/The Silver Screen/thesilverscreen/src/Login/Heading/Heading.css";
import "G:/The Silver Screen/thesilverscreen/src/Login/Recent Logins/Recentlogin.css";
import "G:/The Silver Screen/thesilverscreen/src/Login/Recent Logins/Responsive_recent_logins.css";
import Loginform from './LoginForm/LoginForm';
import  "G:/The Silver Screen/thesilverscreen/src/LoginForm/Loginform.css";
import  "G:/The Silver Screen/thesilverscreen/src/LoginForm/ResponsiveLoginform.css";

function App(){   
    return(   
    <>
 
    <Heading/>
    <Recent/>
    <Loginform/>
    
    </>

    );
}
export default App;