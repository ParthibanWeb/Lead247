import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles,Button,InputLabel,NativeSelect,Accordion,Typography,AccordionSummary,AccordionDetails,MenuItem} from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import HouseIcon from '@material-ui/icons/House';
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

    const property = [{value:'',label:''},{value:'Detached',label:'Detached'},{value:'SemiDetached',label:'SemiDetached'},{value:'MidTerrace',label:'MidTerrace'},{value:'EndTerrace',label:'EndTerrace'},{value:'DetachedBungalow',label:'DetachedBungalow'},{value:'SemiDetBungalow',label:'SemiDetBungalow'},{value:'Flat',label:'Flat'},]
    const bed = ['','1','2','3','4','5','6']
    const propbuilt = ['','Pre 1900','1900-1950','1951-1971','1973-1990','1990 - Younger']
    const laflex = ['','Age Above 60','Child below 5','sick']
    const wall = ['','Solid','Cavity']
    const benefits = ['','PensionCredit Gr','WorkingTax Credit','ChildTax Credit','PIP','DLA','Child Benfits','Income Support','Attendance Allowance']
    const fuel = [{value:'',label:''},{value:'Electric',label:'Electric'},{value:'SolidFuel',label:'SolidFuel'},{value:'LPG',label:'LPG'},{value:'Gas',label:'Gas'},{value:'Oil',label:'Oil'},]
    const classes = useStyles();
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



<div className={classes.accor}>
<Accordion>
        <AccordionSummary
          expandIcon={<AssignmentIcon style={{ fontSize: 30 }}  color="primary" />}
          aria-controls="panel4a-content"  
          id="panel3a-header">
          <Typography className={classes.heading}><b>General Cretria</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
              <div>
<TextField required id="Owner" select label="Owner" defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
<option value=""></option>
  <option value="Owner">Owner</option>
  <option value="Privater Render">Privater Render</option>
 </TextField>
 <TextField required id="Fuel" select label="Type of fuel" defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
      {fuel.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
 </TextField>
 <TextField required id="Property" select label="Type of Property" defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {property.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
 </TextField>

 <TextField required id="BedRoom" select label="No of BedRooms" defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {bed.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
 </TextField>

 </div>

 <div>
 <TextField required id="Benefits" select label="Benefitss"  style={{ width: '50ch' }} defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {benefits.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
 </TextField>
 <TextField  id="Laflex" select label="Laflex"  defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {laflex.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
 </TextField>
 <TextField id="PropBuilt" select label="Property Built"  defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {propbuilt.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
 </TextField>
 <TextField id="Wall" select label="Type Of Wall"  defaultValue="" variant="filled" SelectProps={{
            native: true,
          }}>
    {wall.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
 </TextField>

 <TextField
       required id="date"
        label="Date of Birth"
        type="date"
        defaultValue="1950-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />

 </div>
          </Typography>
        </AccordionDetails>
     
      </Accordion>
    </div>
     </form>
          </>
          )
  }
 export default AddLead