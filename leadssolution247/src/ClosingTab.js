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
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

      selectEmpty: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(2),
      },

      heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
      }, 
    
    }));


 function ClosingTab()
 {
    const campaign = [{id:'Disposition',value:'Disposition',label:'Campaign Name',filed:[{value:'',label:''},{value:'Ecosy Energy',label:'Ecosy Energy'},{value:'Cosy Homes',label:'Cosy Homes'},{value:'Lux Carbon services',label:'Lux Carbon services'},]},]
    const verifier = [{id:'Verifier',value:'verifier',label:'Verifier',filed:[{value:'Gerrard',label:'Gerrard'},{value:'Trevor',label:'Trevor'},]}, {id:'Epc',value:'Epc',label:'Epc Status',filed:[{value:'EPC',label:'EPC'},{value:'NO EPC',label:'NO EPC'},]},
                      {id:'Location',value:'Location',label:'Lead Type',filed:[{value:'Qualified',label:'Qualified'},{value:'Possible',label:'Possible'},{value:'LaFlex',label:'LaFlex'},]},]
    const measure = [{value:'Loft',label:'Loft'},{value:'IWI',label:'IWI'},{value:'RIR',label:'RIR'},{value:'Cavity',label:'Cavity'},{value:'Boiler',label:'Boiler'},{value:'UFI',label:'UFI'}]
    const [options, setOptions] = React.useState({});
    const classes = useStyles();
  return(
      <>
  <div className={classes.accor}>
<AppBar position="static">
  <AccordionSummary
    expandIcon={<AssignmentIcon style={{ fontSize: 30 }}  color="inherit" />}
    aria-controls="panel4a-content"  
    id="panel3a-header">
    <Typography className={classes.heading}><b>Closing Questions</b></Typography>
  </AccordionSummary>
          <Divider/>
</AppBar>  
<AccordionDetails>
    <Typography>
        <div>
{campaign.map((f) => (<TextField key={f.value} style={{ width: '100ch' }} required id={f.id}  select label={f.label} Value={f.value} variant="filled" SelectProps={{
            native: true,
          }}>{f.filed.map((option)=> (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
 </TextField>))}
</div>
<div>
{verifier.map((f,i) => (<FormControl className={classes.formControl}>
        <InputLabel  id="demo-simple-select-required-label">{f.label}</InputLabel>
        <Select
          labelId={f.label}
          style={{ width: '30ch' }}
          id={f.id}
          value={options[{i}]}
          onChange={(e)=>setOptions({...options, [{i}]: e.target.value})}
           className={classes.selectEmpty}>
          <MenuItem value=""><em>None</em></MenuItem>
          {f.filed.map((option)=> (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl> ))}
   
<Autocomplete multiple
        id='vvf' options={measure} getOptionLabel={(option) => option.value} 
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Measures"
            style={{ width: '50ch' }}
            placeholder="Measuers"
            helperText="Required"
          />
          )}
      />
</div>
<div>
<TextField
          id="outlined-full-width"
          label="Remarks"
          style={{ paddingTop:"2%",width: '100ch' }}
          placeholder="Remarks"
          helperText="Type Any Notes"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

</div>
</Typography>
</AccordionDetails>
</div>
  </>
)
  }
 export default ClosingTab