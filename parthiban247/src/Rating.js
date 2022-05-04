import { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";
function Star({filled , onClick})
{
  return(
  <FaStar color = {filled?"orange":"lightGrey"} onClick = {onClick}/>);
}

export default function App() {
const [rating,setRating] = useState(0);

  return (
    <>
   <div>
     {[1,2,3,4,5].map((val)=><Star key={val} filled ={val <= rating} onClick = {()=>setRating(val)}/>)}
   </div>
   </>
  );
}
