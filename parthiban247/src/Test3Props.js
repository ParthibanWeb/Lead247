

function Star(props)
{
    return(
<>
<h1>My Name is {props.data}</h1>
</>
    );
}


export default function Test3Props()
{
return(
    <>
    <p>Parthiban</p>
    <Star data="Parthi"/>
    </>
)

}
