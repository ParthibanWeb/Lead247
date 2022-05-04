import { useState } from 'react';
import { memo } from "react";


function MyParent() {
const [Count,setCount]=useState(0);
console.log("Parent rendered");
return (
	<div>
	<button onClick={()=>setCount(Count+1)}>
		Increase
	</button>
		
<p>Count:{Count}</p>

	<Child name={"ABCD"}/>
	</div>
);
}

const Child = memo((props)=>{
    console.log("Child Rendered");
    return(
        <div>
            <h1>Child Name={props.name}</h1>
        </div>
    );
});

export default MyParent;
