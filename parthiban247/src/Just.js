import react from "react";

function Just()
{

    const Add=(a,b) =>{
        return a + b;
    } 
    let a = (prompt('a',''));
    let b = (prompt('b',''));
    let c = Add(a,b)
    alert("result"+c);
}

export default Just;