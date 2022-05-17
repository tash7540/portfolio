import About from './components/About.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Work from './components/Work.js';
import Education from './components/Education.js';
import logo from './logo1.jpg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path = '/about' element ={<About/>}/>
          <Route path = '/skills' element ={<Skills/>}/>
          <Route path = '/contact' element ={<Contact/>}/>
          <Route path = '/work' element ={<Work/>}/>
          <Route path = '/education' element ={<Education/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
