import logo from './logo 247.gif';
import Insulation from './img/Insulation.jpg';
import Loft from './img/Loft1.jpg';
import RIR from './img/RIR1.jpg';
import Boiler from './img/Boiler1.jpg';
import './App.css';

function App() {
  return (
    <>
  
<div className='App'>

  <div className='Apps-logo'>
   <div className='Com-logo'>
    <img src ={logo}/>
      <nav role="navigation" class="primary-navigation">
        <li><a href= '#' >Home</a></li>
        <li><a href= '#' >Insulation &dtrif;</a>
              <ul class="dropdown">
        <li><a href="#">Sub-1</a></li>
        <li><a href="#">Sub-2</a></li>
        <li><a href="#">Sub-3</a></li>
      </ul></li>
        <li>Contact</li>  
        <li>Login</li>
      </nav>
   </div>
  </div>
  <div className='main'>
    <div className="intro"><h3>The Strategic Plan at 24/7 Lead Solutions is quite straightforward - &ldquo;Get things Done!&rdquo;</h3>
         <p>24/7 Lead Solutions is a leading outsourcing service provider in India with marked achievements in the fields of Lead Generation, Customer Support, Research and Marketing, etc. The winning combination is through a fine balance of State-of-the-art business equipments and methodologies, cross-domain efficiency, in-depth subject matter knowledge, ascending IT capabilities.</p>
         <p >24/7 Lead Solutions is where you let your business grow through us!</p>
    </div>
    <div className='container'>
      <div className="box">
      <h2>Eco Funding</h2>
      <h3>

The Energy Company Obligation (ECO) is a government energy efficiency scheme in Great Britain to help reduce carbon emissions and tackle fuel poverty.</h3>

    <h1> <img src ={RIR} /></h1>
    
        </div>    
       <div className="box">
       <h2>Insulation</h2>
       <p>Home Insulation like Solid Wall Insulation,Cavity Wall Insulation,Room in Roof Insulation and Loft Insulation</p>
     <img src ={Loft}/>
     


       </div> 
    <div className="box">
    <h2>Heating</h2>
    <p>Boiler and Electric Storage Heater Installation. </p>
     <img src ={Boiler} />

       </div> 
   </div>
</div>
  <div className='footer'>
    <p>Copyright © 2012 - 2022 24/7 Lead Solutions. All Rights Reserved</p>
    <p>Designed By 24-7 Leadssolution IT Team</p></div>
  
</div>
</>
  );
}

export default App;
