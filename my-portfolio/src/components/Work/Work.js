import {Container,Row,Col} from 'react-bootstrap';
import './styles.css';
import cuLogo from '../../img/cu-logo.jfif';
import nsfLogo from '../../img/nsf-logo.jfif';
import {Link} from 'react-router-dom';

function Work() {
  return (
    <Container>
      <Row>
        <h1>Work Experience</h1>

        <div className='work-div'>
        <a href="https://www.colorado.edu/research/ai-institute/">

          <img className='logo' src={nsfLogo} alt="NSFlogo" />
        </a>
          <h1 className='education-uni'>National Science Foundation - Institute for Student-AI Teaming</h1>
        </div>
        <h1 className='job-title'> Junior Software Developer</h1>

      </Row>
      <Row>
      <Col>
        <div>
          <ul>
              <li className='education-li'>● Incorporated hooks in Microsoft MakeCode in order to capture and log data of user’s activities.</li>
              <li className='education-li'>● Captured ctivities such as blocks creation, deletion and modification as well as timestamps of activities.</li>
              <li className='education-li'>● Built a backend REST API with Node JS to save data to MongoDB Atlas for analysis and visualization.</li>
              <li className='education-li'>● Developed a web application using React JS in order to visualize user’s activities as a timeline.</li>
          </ul>
        </div>
        </Col>
      </Row>
      <div className='work-div'>
      <a href="https://www.colorado.edu/">
        <img className='logo' src={cuLogo} alt="CUlogo" />
      </a>
        <h1 className='education-uni'>University of Colorado at Boulder</h1>
      </div>
      <h1 className='education-degree'> Research Assistant (Information Science Department)</h1>

      <Row>
      <Col>
        <div>
          <ul>
              <li className='education-li'>● Utilized PushShift API to collect public data such as posts and comments from Reddit.</li>
              <li className='education-li'>● Supported a Python program which analyzes the raw data and generates genealogy data of subreddits.</li>
              <li className='education-li'>● Generated a genealogy graph of reddit communities using Gephi.</li>
          </ul>
        </div>
        </Col>
      </Row>
      <Row>
        <div className='footer'></div>
      </Row>
    </Container>
  );
}

export default Work;
