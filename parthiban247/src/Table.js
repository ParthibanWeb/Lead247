

export default function Table()
{
const data = [{rollno:1,name:"parhit",age:14},{rollno:2,name:"karhti",age:15},]

return(
    <table>
  
        <tr>
            {Object.keys(data[0]).map((key)=><td>{key}</td>)}
        </tr>
      {data.map((x)=>  <tr>
            {Object.values(x).map((val)=><td>{val}</td>)}
        </tr>)}
    </table>
)

}