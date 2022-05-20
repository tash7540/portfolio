import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';

function ContactForm() {
  const [postData, setPostData] = useState({ name: '', email: '',subject:'', message: ''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData);
    axios.post('http://localhost:5000/posts',postData);
    clear();
  };

  const clear = () => {
    setPostData({ name: '', email: '',subject:'', message: ''});
  };

  return (
    <div>
      <h1>Send me a Message</h1>
      <Form className='Form-style' onSubmit={handleSubmit}>
          <Form.Group className = 'Form-group'>
            <Form.Control className='input-sm' type='text' placeholder='Name' value={postData.name}  onChange={(e) => setPostData({ ...postData, name: e.target.value })}></Form.Control>
          </Form.Group>

          <Form.Group className = 'Form-group'>
            <Form.Control className='input-sm' type='email' placeholder='Example@email.com'value={postData.email}  onChange={(e) => setPostData({ ...postData, email: e.target.value })}></Form.Control>
          </Form.Group>

          <Form.Group className = 'Form-group's>
            <Form.Control className='input-sm' type='text' placeholder='Subject'value={postData.subject}  onChange={(e) => setPostData({ ...postData, subject: e.target.value })}></Form.Control>
          </Form.Group>

          <Form.Group className = 'Form-group-text'>
            <Form.Control className=' Form-group-text input-lg' as="textarea"placeholder='Your Message' rows={3} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></Form.Control>
          </Form.Group>
          <Button className='button' type='submit'>Send</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
