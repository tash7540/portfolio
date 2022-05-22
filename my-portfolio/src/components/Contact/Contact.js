import './styles.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContactInfo from './Comps/ContactInfo.js';
import ContactForm from './Comps/ContactForm.js';

function Contact() {

  return (
    <Container>
      <h1>Interested in working together?</h1>
      <Row style={{marginTop:80}}>
        <Col>
          <ContactForm/>
        </Col>
        <Col>
          <ContactInfo/>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
