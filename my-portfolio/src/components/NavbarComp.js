import '../App.css';
import {Link} from 'react-router-dom';
import logo from '../mylogo.PNG';
import logo1 from '../IMG_E3395.JPG';
import {Container,Row,Col,Form,Card,Button,Navbar,Nav} from 'react-bootstrap';

function NavbarComp() {
  return (
      <Navbar collapseOnSelect expand ='sm' bg ='dark' variant = 'dark'>
      <Container>
          <Link to='/'>
            <img className='logo' src={logo1} alt="logo" />
          </Link>
          <div className ='nav-links'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id ='responsive-navbar-nav'>
            <Nav>
              <Nav.Link className='nav-link' href ='/'></Nav.Link>
              <Nav.Link  className='nav-link' href ='/about'>About</Nav.Link>
              <Nav.Link className='nav-link' href ='/skills'>Skills</Nav.Link>
              <Nav.Link  className='nav-link' href ='/work'>Work-Experience</Nav.Link>
              <Nav.Link className='nav-link' href ='/education'>Education</Nav.Link>
              <Nav.Link className='nav-link' href ='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
      </Navbar>
  );
}

export default NavbarComp;
