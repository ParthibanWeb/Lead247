import react from "react";
import {useState} from "react"
import './App.css';

export default function Login()
{

    const [user,setUser] = useState();
    const [pass,setPass] = useState();

    const add =(e)=>
    {console.log(e)

    }

 return(
     <>
        <div className="Form">
            <form onSubmit={(e)=>add(e)}>
            <selection className="container">
            <p>UserName</p> <input type ="text" name="User" onChange={(e)=>setUser(e.target.value)}/>
            <p>Password</p> <input type ="text" name="Pass" onChange={(e)=>setPass(e.target.value)}/>
            <button className="button">Login</button>
            </selection>
            </form>
        </div>


        </>
    )


}