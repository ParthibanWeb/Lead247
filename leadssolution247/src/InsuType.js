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
        width: '50ch',
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


 function InsuType()
 {
    const loftfield = [{id:'Wloft',value:'Wloft',label:'How long ago was loft last insulated?',filed:[{value:'',label:''},{value:'10yrs',label:'10yrs'},{value:'above 10Years',label:'above 10Years'},{value:'above 20Years',label:'above 20Years'},]},
    {id:'LoftBoard',value:'LoftBoard',label:'Has the loft been boarded',filed:[{value:'',label:''},{value:'Partly',label:'Partly'},{value:'No',label:'No'},]},
    {id:'LoftLift',value:'LoftLift',label:'boards be lifted for insulation work to be carried out?',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
    {id:'LoftEmp',value:'LoftEmp',label:'Is the loft empty ?',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
    {id:'LoftCle',value:'LoftCle',label:'Can it be cleared out for the work to be carried out',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
    {id:'LoftSoWork',value:'LoftSoWork',label:'Is there room for someone to work in loft',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
    {id:'LoftConv',value:'LoftConv',label:'Has the loft been converted',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},]


    const boiler = [{id:'BoilerType',value:'BoilerType',label:'What Type of Boiler Do you have?',filed:[{value:'',label:''},{value:'10yrs',label:'10yrs'},{value:'above 10Years',label:'above 10Years'},{value:'above 20Years',label:'above 20Years'},]},
    {id:'LoftBoard',value:'LoftBoard',label:'how old your current boiler is? Would it be over 10 years old? ',filed:[{value:'',label:''},{value:'Partly',label:'Partly'},{value:'No',label:'No'},]},
    {id:'LoftLift',value:'LoftLift',label:'Is your current boiler still working? ',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
    {id:'LoftEmp',value:'LoftEmp',label:'Does the boiler flue go through the',filed:[{value:'',label:''},{value:'Yes',label:'Yes'},{value:'No',label:'No'},]},
]


    const classes = useStyles();
  return(
      <>




<div className={classes.accor}>
    <Accordion>
<AppBar position="static">

        <AccordionSummary
          expandIcon={<AssignmentIcon style={{ fontSize: 30 }}  color="inherit" />}
          aria-controls="panel4a-content"  
          id="panel3a-header">
          <Typography className={classes.heading}><b>Type of Insulation</b></Typography>
          </AccordionSummary>
          <Divider/>
        
    <Accordion>   
             <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4a-content"  
          id="panel3a-header">
          <Typography className={classes.heading}>Loft Insulation</Typography>
          </AccordionSummary>       
       
          <AccordionDetails>
          <Typography>
              <div>
              {loftfield.map((f) => (<TextField key={f.value} style={{ width: '50ch' }} required id={f.id}  select label={f.label} Value={f.value} variant="filled" SelectProps={{
            native: true,
          }}>
      {f.filed.map((option)=> (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
 </TextField>))}

              </div>
          </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion>   
             <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4a-content"  
          id="panel3a-header">
          <Typography className={classes.heading}>Boiler</Typography>
          </AccordionSummary>       
       
          <AccordionDetails>
          <Typography>
              <div>
              {boiler.map((f) => (<TextField key={f.value} style={{ width: '70ch' }} required id={f.id}  select label={f.label} Value={f.value} variant="filled" SelectProps={{
            native: true,
          }}>
      {f.filed.map((option)=> (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
 </TextField>))}

              </div>
          </Typography>
        </AccordionDetails>
        </Accordion>
 

        </AppBar>  

       
</Accordion>   
    
       
    
    </div>

   
          </>
          )
  }
 export default InsuType