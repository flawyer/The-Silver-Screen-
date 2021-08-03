//Making recent login with simple code
import React from 'react';
import logo from 'G:/The Silver Screen/thesilverscreen/src/Login/Image/SHerlock1.jpg';
/*
1. Making a div name 'Recent'
2. Addding H3 class with classname "recen text-secondary " 
3. Adding paragraph named 'p1'
4.Adding img as logo and adding classname 'simg'
5.Adding img as logo and adding classname 'dsimg'*/
 function Recent(){
     return(
         <>
           <div className ="Recent">
             <h3 className="recen text-secondary " >Recent Logins</h3>
             <p className="p1">Click your picture or add an account</p>
             <div className ="Flbox">
             <div className='image1'>
               <img src = {logo} className='simg' alt="logo"/> 
               <div className="text">Sherlock</div>
             </div>
             <div className='image2'>
               <img src = {logo} className='dsimg' alt="logo"/> 
               <div className="text1">Sherlock</div>
             </div>
           </div>
           </div>
         </>
     )

 }
export default Recent;