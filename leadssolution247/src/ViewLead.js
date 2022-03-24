import { useState } from "react/cjs/react.development";
function ViewLead()
{
    const [count,setCount] = useState(0)

    return(

        <>
        <p>count number</p>
        {count}
        <button onClick={()=>setCount(count+1)}>count</button>
        </>
    )
}
export default ViewLead