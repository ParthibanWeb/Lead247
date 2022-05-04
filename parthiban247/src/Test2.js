import {useState} from 'react';

function Test2()
{

    const [show,setShow] = useState(true)
 return(
     <>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
  </rect>
</svg>

<button onClick = {()=>setShow(!show)}>show</button>

{show && <div><p>Display</p></div> }
</>
);

}

export default Test2;