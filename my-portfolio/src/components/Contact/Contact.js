import './styles.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContactInfo from './Comps/ContactInfo.js';
import ContactForm from './Comps/ContactForm.js';

function Contact() {

  return (
    <Container>
      <Row>
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
