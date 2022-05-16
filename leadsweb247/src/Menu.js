import './App.css';
import logo from './logo 247.gif';
function Menu() {
    return (
      <>
      <div className='Apps-logo'>
  

       <div className='Com-logo'>
    <img src ={logo}/>
    <nav >
      <ul>
        <li><a href= 'home' >Home</a></li>
        <li><a href= 'insu' >Insulation </a>
    <ul class="dropdown">
        <li><a href="cavity">Cavity Wall Insulation</a></li>
        <li><a href="Solid">Solid Wall Insulation</a></li>
        <li><a href="Rir">Room in Roof</a></li>
        <li><a href="Loft">Loft Insulation</a></li>
      </ul></li>
      <li><a href= '#' >Contact</a></li>
      <li><a href= '#' >Login</a></li>
        </ul>
      </nav>
   </div>

   </div>
      </>
      );
      }

export default Menu;