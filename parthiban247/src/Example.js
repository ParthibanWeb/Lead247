import react  from "react";
import './App.css';
export default function Example()
{

    const num = (x) => x>1;

    const data = [
       {rollno:1, name:"parthiban",age:18,marks:100},
       {rollno:2,name:"rahja",age:18},
       {rollno:3,name:"muthu",age:32},
    ]

    return(
        
        <>
        <table className="table">
            
        <tr key={"header"}>
        {Object.keys(data[0]).map((key) => (
          <th>{key}</th>
        ))}
        </tr>
       {data.map((x)=> (<tr>
        {Object.values(x).map((val)=> (<th>{val}</th>))}</tr>))}
     </table>
        </>

    );

    {/*let a = [1,2,3,4,5];
    let f = ["apple",'ball','cat','dof'];
    let b = a.filter(num);
    f.push('fox');
    let d = f.pop();
console.log(a);
console.log(b);
console.log(f);
    console.log(d);*/}
}

