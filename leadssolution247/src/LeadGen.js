import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles,AppBar,Button,InputLabel,NativeSelect,AccordionActions,Accordion,Link,Breadcrumbs,Typography,AccordionSummary,AccordionDetails,MenuItem} from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import HouseIcon from '@material-ui/icons/House';
import Divider from '@material-ui/core/Divider';



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


 function LeadGen()
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




<div className={classes.accor}>
<AppBar position="static">


        <AccordionSummary
          expandIcon={<AssignmentIcon style={{ fontSize: 30 }}  color="inherit" />}
          aria-controls="panel4a-content"  
          id="panel3a-header">
          <Typography className={classes.heading}><b>General Cretria</b></Typography>
          </AccordionSummary>
          </AppBar> 
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
      {fuel.map((k) => (
            <option key={k.value} value={k.value}>
              {k.label}
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
     {/* <div>
        <AccordionActions>
        
        
        <Link href="ll" button>
        <Button variant="contained" style={{ width: '50ch' }} size="large" color="primary">
            Next
          </Button> </Link>
        </AccordionActions>

    </div>*/}
 </div>
          </Typography>
        </AccordionDetails>
        <Divider />

      
    
       
    
    </div>

   
          </>
          )
  }
 export default LeadGen