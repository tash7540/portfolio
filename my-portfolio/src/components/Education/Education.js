import {Container,Row,Col} from 'react-bootstrap';
import './styles.css';
import cuLogo from '../../img/cu-logo.jfif';
import ccaLogo from '../../img/cca-logo.png';

import {Link} from 'react-router-dom';

function Education() {
  return (
    <Container>
      <Row>
        <h1>Education</h1>
        <div className='education-div'>
        <a href="https://www.colorado.edu/">
            <img className='logo' src={cuLogo} alt="CUlogo" />
          </a>
          <h1 className='education-uni'>University of Colorado at Boulder - College of Engineering and Applied Sciences</h1>

        </div>
        <div>
          <h1 className='education-degree'> Bachelor of Science in Computer Science</h1>
          <div style={{marginBottom:40}}> </div>
          <h1 className='education-degree'>Courses taken includes:</h1>
        </div>

      </Row>
      <Row>
      <Col>
        <div className = 'courses'>
          <ul>
              <li className='education-li'>● Software Engineering</li>
              <li className='education-li'>● Algorithms</li>
              <li className='education-li'>● Object Oriented Analysis and Design</li>
              <li className='education-li'>● Machine Learning</li>
              <li className='education-li'>● Data Mining </li>

          </ul>
        </div>
        </Col>
        <Col>
        <div>
          <ul>
              <li className='education-li'>● Big Data Architecture</li>
              <li className='education-li'>● Advanced Data Science.</li>
              <li className='education-li'>● Software Development Methods and Tools</li>
              <li className='education-li'>● Data Structure</li>
              <li className='education-li'>● Computer Systems</li>

          </ul>
        </div>
        </Col>
      </Row>
      <div className='education-div'>
      <a href="https://www.ccaurora.edu/">
        <img className='logo' src={ccaLogo} alt="CCAlogo" />
      </a>
        <h1 className='education-uni'>Community College of Aurora</h1>
      </div>
      <h1 className='education-degree'> Associate of Arts</h1>

      <Row>
        <div className='footer'></div>
      </Row>
    </Container>
  );
}

export default Education;
