import {Container,Row,Col} from 'react-bootstrap';
import './styles.css';

function Education() {
  return (
    <Container>
      <Row>
        <h1>Education</h1>

        <div>
          <h1 className='education-uni'>University of Colorado at Boulder - College of Engineering and Applied Sciences</h1>
          <h1 className='education-degree'> Bachelor of Science in Computer Science</h1>
          <div style={{marginBottom:40}}> </div>
          <h1 className='education-degree'>Courses taken includes:</h1>
        </div>

      </Row>
      <Row>
      <Col>
        <div className = 'asd'>
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
      <div>
        <h1 className='education-uni'>Community College of Aurora</h1>
        <h1 className='education-degree'> Associate of Arts</h1>
      </div>
      <Row>
        <div className='footer'></div>
      </Row>
    </Container>
  );
}

export default Education;
