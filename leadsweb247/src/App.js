import Home from './Home.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import './App.css';
import Cavity from './Cavity.js';
import Solid from './Solid.js';
import Rir from './Rir.js';
import Loft from './Loft.js';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
<div className='App'>
<Menu/>
<BrowserRouter>
<Routes>
<Route path="home" element = {<Home/>} ></Route>
<Route path="insu" element = {<><Cavity/><Loft/><Rir/><Solid/></>} ></Route>
<Route path="cavity" element = {<Cavity/>} ></Route>
<Route path="loft" element = {<Loft/>} ></Route>
<Route path="Rir" element = {<Rir/>} ></Route>
<Route path="Solid" element = {<Solid/>} ></Route>
</Routes>
</BrowserRouter>
<Footer/>
</div>
</>
  );
}

export default App;
