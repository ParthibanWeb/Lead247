import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './App.css';


function Login()
{
    const userName = "Parthiban";
    const passWord = "123456";
const navigate =useNavigate();
    const [data,setData] = useState([{name:"",pass:""}]);
   const loginPage = () => {
        console.log(data.name);
        console.log(data.pass);
    if (data.name===userName && data.pass===passWord)
        {
            
        alert("Login Successfully");
        navigate("/addlead");

    
        }else
        {
            alert ("login failed");
        }
        //console.log("click the button")
     }

return(
<div className="min-h-max flex flex-col order-2 sm:py-12 text-center md:text-left space-y-4 p-10 xs:p-0 mx-auto mt-12 md:w-full max-w-md shadow-inner shadow-orange-300">
<h5><b> Username</b>  </h5>
<input type ="text" name="name" value={data.name} placeholder="Username" onChange = {(e)=>{setData(hh=>({...hh,name: e.target.value}));}} className ="form-control"></input>
<br></br><h5 > <b>Password</b></h5>
<input type="text" name="pass" value={data.pass} placeholder="Password" onChange = {(e)=>{setData(gg=>({...gg,pass: e.target.value}));}} className ="form-control"></input>
<br/><br/>

<button class="bg-orange-800 text-white font-bold py-1 px-20 rounded" onClick = {loginPage}>Login</button>
</div>
    );
}


export default Login;