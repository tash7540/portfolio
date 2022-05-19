import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../mylogo.PNG';
import logo1 from '../IMG_E3395.JPG';

function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <img className='logo' src={logo1} alt="logo" />
      </Link>
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
