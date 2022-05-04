import react from "react";
import { useState,useCallback } from "react";
import { memo } from "react";
function Test5()
{
const [name,setName] = useState("parthiban");
const [cName,changeName] = useState("");
//const onInputChange = useCallback(()=>setName(cName),[cName]);
//const onInputName = useCallback((e)=>changeName(e.target.value),[cName]);
console.log(" Parent Render")

return( <><input type = "text" onChange={(e)=>changeName(e.target.value)}/>
<Child name={name} nextName = {()=>setName(cName)}/></>);

}

const Child = (props) =>
{ 
    console.log(" child Render")
 console.log(props)
 const {name,nextName} = props;
return (
<>
<p>My Name :{name}</p>
<button onClick={nextName}>Change Name</button>
</>
);
}

export default memo(Test5);