import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import NavbarComp from './components/Navbar/NavbarComp.js';
import Work from './components/Work/Work.js';
import Education from './components/Education/Education.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Form,Card,Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarComp/>
        <Routes>
        <Route path = '/' element ={<Home/>}/>
          <Route path = '/about' element ={<About/>}/>
          <Route path = '/home' element ={<Home/>}/>
          <Route path = '/contact' element ={<Contact/>}/>
          <Route path = '/work' element ={<Work/>}/>
          <Route path = '/education' element ={<Education/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
