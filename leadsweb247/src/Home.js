import logo from './logo 247.gif';
import Insulation from './img/Insulation.jpg';
import Loft from './img/Loft1.jpg';
import RIR from './img/RIR1.jpg';
import Boiler from './img/Boiler1.jpg';
import './App.css';

function Home() {
    return (
      <> 
      <div className='main'>
    <div className="intro"><h3>The Strategic Plan at 24/7 Lead Solutions is quite straightforward - &ldquo;Get things Done!&rdquo;</h3>
         <p>24/7 Lead Solutions is a leading outsourcing service provider in India with marked achievements in the fields of Lead Generation, Customer Support, Research and Marketing, etc. The winning combination is through a fine balance of State-of-the-art business equipments and methodologies, cross-domain efficiency, in-depth subject matter knowledge, ascending IT capabilities.</p>
         <p >24/7 Lead Solutions is where you let your business grow through us!</p>
    </div>
    <div className='container'>
      <div className="box">
      <h3>Eco Funding</h3>
     
     <img src ={RIR}/>
     <p>

The Energy Company Obligation (ECO) is a government energy efficiency scheme in Great Britain to help reduce carbon emissions and tackle fuel poverty.</p>

    
        </div>    
       <div className="box">
       <h3>Insulation</h3>
    <img src ={Loft}/>
     
    <p>Home Insulation like Solid Wall Insulation,Cavity Wall Insulation,Room in Roof Insulation and Loft Insulation</p>


       </div> 
    <div className="box">
    <h3>Heating</h3>

     <img src ={Boiler}/>
     <p>Boiler and Electric Storage Heater Installation. </p>
       </div> 
   </div>
</div>
      </>
    );
}

export default Home;