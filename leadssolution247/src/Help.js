import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React,{useState,useEffect} from "react"

function Sample()
{

    useEffect(()=>{

        console.log("Created")
        return ()=>
        {
            console.log("i m destroying") 
        }
    })
    return "Sample";

}

function Help()
{
  
    const [value,setValue] = useState(1);
    const [page,changePage] = useState(true);
   
    return(
        <>
 
        <button onClick={()=>{changePage(!page)}}>Page</button>
        {page && <Sample/>}
        </>
    )
}
export default Help;