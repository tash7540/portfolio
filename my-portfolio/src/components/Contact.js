import { useState } from "react";
import '../App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Form,Card,Button} from 'react-bootstrap';
import {GoMarkGithub } from "react-icons/go";
import {AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
import {Link} from 'react-router-dom';

function Contact() {
  const [postData, setPostData] = useState({ name: '', email: '', message: ''});


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData);
    axios.post('localhost:5000/posts',postData);
    clear();
  };

  const clear = () => {
    setPostData({ name: '', email: '', message: ''});
};
  return (
    <Container>
      <Row>
        <Col>
          <h1>Send me a Message</h1>
          <Form className='Form-style' onSubmit={handleSubmit}>
              <Form.Group className = 'Form-group'>
                <Form.Control className='input-sm' type='text' placeholder='Name' value={postData.name}  onChange={(e) => setPostData({ ...postData, name: e.target.value })}></Form.Control>
              </Form.Group>

              <Form.Group className = 'Form-group'>
                <Form.Control className='input-sm' type='email' placeholder='Example@email.com'value={postData.email}  onChange={(e) => setPostData({ ...postData, email: e.target.value })}></Form.Control>
              </Form.Group>

              <Form.Group className = 'Form-group'>
                <Form.Control className='input-sm' type='text' placeholder='Subject'></Form.Control>
              </Form.Group>

              <Form.Group className = 'Form-group-text'>
                <Form.Control className=' Form-group-text input-lg' as="textarea"placeholder='Your Message' rows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></Form.Control>
              </Form.Group>
              <Button className='button' type='submit'>Send</Button>
          </Form>

        </Col>
        <Col>
          <h1>Contact Information</h1>
            <h1 className = 'contact-h1'>Tamer Shahwan </h1 >
            <h1 className = 'contact-h1'> Tamer.Shahwan@colorado.edu </h1 >
            <h1 className = 'contact-h1'> 8111 E Yale Ave Denver, CO 80231 </h1 >
            <h1 className = 'contact-h1'> 720-645-9611 </h1 >
            <div className='icon-div'>
              <a href="https://github.com/tash7540">
                <GoMarkGithub className='icon'/>
              </a>
              <a href="https://www.linkedin.com/in/tamer-shahwan-5b4b1a133/">

                <AiFillLinkedin  className='icon'/>
              </a>
              <a href="https://www.facebook.com/shahuan">

                <AiFillFacebook className ='icon'/>
              </a>
            </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
