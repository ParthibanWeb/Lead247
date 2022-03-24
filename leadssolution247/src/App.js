import logo from './logo.svg';
import './App.css';
import React from "react";
import Logo from './Logo';
import Help from './Help';

import AddLead from './AddLead';
import InsuType from './InsuType';
import Test1 from './Test1';
import LeadGen from './LeadGen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SideMenu from './Components/SideMenu';
import { makeStyles } from "@material-ui/core";
import Header from './Components/Header';

<link href="/dist/output.css" rel="stylesheet"/>

const useStyles = makeStyles({
appMain:
{
  paddingLeft:"15%",
  width:"100%"
},
formAlign:
{
  paddingLeft:"18%",
  width:"100%",
  paddingTop:"2%"
},

formGenAlign:
{
  paddingLeft:"18%",
  width:"100%",
  paddingTop:"1%"
},

});


function App() 
{
  const classes = useStyles();
 
 
  return (
    <>
   <BrowserRouter>



<div className={classes.formAlign}><AddLead/></div>



  </BrowserRouter>

 





    </>
  );
}
export default App;
