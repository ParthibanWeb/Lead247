import React,{useState,useEffect} from "react"

function Test()
{

    const [data,setData] = useState({name:"",age:""})
    return(
    <>
    <form className="Test">
        <p>Name</p>
<input type="text" name="name" value="name" onChange ={(e)=>e.target.name}/>
<p>Age</p>
<input type="text" name="name" value="age" onChange ={(e)=>e.target.age}/>
<button onClick={()=>setData({name:name,age:age})}> submit</button>

    </form>
        </>
    )
}