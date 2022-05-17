import '../App.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <ul className='nav-link'>

        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/skills'>
          <li>Skills</li>
        </Link>
        <Link to='/work'>
          <li>Work Experience</li>
        </Link>
        <Link to='/Education'>
          <li>Education</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Navbar;
