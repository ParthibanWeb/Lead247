function Test1()
{
const [users , setUsers ] = useState({});
    const getUserData = async ()=>
    {
      const reposnse = await fetch(url);
      const jsonData = await reposnse.json();
       setUsers(jsonData);
    }

    useEffect(()=>{
        getUserData();
    },[]);

    return(
        <div>
            
        </div>
    )
}