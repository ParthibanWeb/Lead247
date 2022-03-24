import React from 'react';
import LeadGen from './LeadGen';
import TextField from '@material-ui/core/TextField';
import { makeStyles,Button,InputLabel,NativeSelect,Accordion,Typography,AccordionSummary,AccordionDetails,MenuItem} from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import HouseIcon from '@material-ui/icons/House';
import Test1 from './Test1';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },

    accor: {
        
        paddingTop:"2%",
         width: '100%',
      },

      heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
      }, 
    
    }));

 function AddLead()
 {

 const classes = useStyles();

 {/*const fetchData = async () => {
    const res = await fetch()
    const json = await res.json()
    return json.result
}

const ContactsList = props => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchData().then(employees => {
      setEmployees(employees)
    })
  }, [])*/}
  return(
      <>
<form className={classes.root} noValidate autoComplete="off">
<div>
<ContactPhoneIcon style={{ fontSize: 30 }}  color="primary"/>
<TextField id="standard-search" label="Search Ph.Number" type="search" />
<Button variant="contained" color="primary">Search</Button></div>
<div>
<PhoneIcon style={{ fontSize: 30 }}  color="primary"  />
<TextField disabled id="standard-disabled" label="Ph.Number" defaultValue="" /></div>
<div>
<AccountCircle style={{ fontSize: 30 }}  color="primary"  />
<TextField
style={{ width: '10ch' }} 
id="Title"
     type="Title"
     select 
          label="Title"
          SelectProps={{
            native: true,
          }}
          variant="filled">
   <option value=""></option>
  <option value="Mr">Mr</option>
  <option value="Mrs">Mrs</option>
  <option value="Mrs">Miss</option>
 
</TextField>
<TextField required id="Fname"  label="First Name" defaultValue="" />
<TextField required id="Mname" style={{ width: '10ch' }}  label="Mid Name" defaultValue="" />

<TextField required id="Lname" label="Last Name" defaultValue="" />
</div>
<div>
<HouseIcon style={{ fontSize: 30 }}  color="primary"  />
<TextField required id="Add1" label="Address1" defaultValue="" />
<TextField  id="Add2" label="Address2" defaultValue="" />
<TextField  id="Add3" label="Address3" defaultValue="" />
<TextField disabled id="zip" label="Postal Code" defaultValue="" />
</div>


<div className={classes.accor}><Test1/></div>
     </form>
          </>
          )
  }
 export default AddLead