import logo from './logo.svg';
import './App.css';
import Logo from './Logo'
import AddLead from './AddLead'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login'
<link href="/dist/output.css" rel="stylesheet"/>

function App() {
  return (
    <>
    <BrowserRouter>
    <Logo/>
    <Routes><Route extact path="/login" element= {<Login/>}> </Route> </Routes>
    <Routes><Route  path="/addlead" element= {<AddLead/>}> </Route> </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
