import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../mylogo.PNG';
function Navbar() {
  return (
    <nav>
      <img className='App-logo' src={logo} alt="logo" ></img>

      <ul className='nav-link'>

        <Link to='/about' style={{ textDecoration: 'none' }}>
          <li>About</li>
        </Link>
        <Link to='/skills' style={{ textDecoration: 'none' }}>
          <li>Skills</li>
        </Link>
        <Link to='/work' style={{ textDecoration: 'none' }}>
          <li>Work Experience</li>
        </Link>
        <Link to='/Education' style={{ textDecoration: 'none' }}>
          <li>Education</li>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <li>Contact</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Navbar;
