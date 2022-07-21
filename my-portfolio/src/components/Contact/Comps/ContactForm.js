import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import emailjs from 'emailjs-com';


function ContactForm() {
  const [postData, setPostData] = useState({ name: '', email: '',subject:'', message: ''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData);
    axios.post('http://localhost:5000/posts/sendMessage',postData);
    clear();
  };

  const clear = () => {
    setPostData({ name: '', email: '',subject:'', message: ''});
  };

  return (
    <div>
      <h1>Send me a Message</h1>
      <Form className='Form-style' onSubmit={handleSubmit}>
        <div className='form-name-email'>
          <Form.Group className = 'Form-group-name'>
            <Form.Control className='input-lg' type='text' placeholder='Name' value={postData.name}  onChange={(e) => setPostData({ ...postData, name: e.target.value })}></Form.Control>
          </Form.Group>

          <Form.Group className = 'Form-group-email'>
            <Form.Control className='input-lg' type='email' placeholder='Example@email.com'value={postData.email}  onChange={(e) => setPostData({ ...postData, email: e.target.value })}></Form.Control>
          </Form.Group>
        </div>
          <Form.Group className = 'Form-group's>
            <Form.Control className='input-lg' type='text' placeholder='Subject'value={postData.subject}  onChange={(e) => setPostData({ ...postData, subject: e.target.value })}></Form.Control>
          </Form.Group>

          <Form.Group className = 'Form-group-text'>
            <Form.Control className=' Form-group-text input-lg' as="textarea"placeholder='Your Message' rows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></Form.Control>
          </Form.Group>
          <Button className='button-form' type='submit'>Send</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
