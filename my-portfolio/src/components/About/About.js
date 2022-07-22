import {Link} from 'react-router-dom';
import './styles.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Skills from './Skills/skills.js';
function About() {
  return (
    <Container>
      <Row>
        <div>
          <h3 className="page-title">Who Am I?</h3>
        </div>
      </Row>
      <Row>
        <Col>
          <div className='about-form'>
            <h1 className='about-info'>An energetic Software Engineer located in Denver, Colorado. I have serious passion for developing software solutions of all kinds. </h1>
            <h1 className='about-info'>Well-organised person, problem-solver and self-starter with high attention to detail. </h1>
            <h1 className='about-info'> As a passionate Software Engineer, I'm constantly self improving and learning new technologies. I believe that winners finds a way.</h1>
            <h1 className='about-info'> I just graduated from the University of Colorado at Boulder with a Bachelor of Science in Computer Science.</h1>
          </div>
        </Col>
        <Col>
          <Skills/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
