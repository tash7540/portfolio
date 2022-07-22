import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import { useState } from "react";
import axios from 'axios';
import emailjs from 'emailjs-com';


function ContactForm() {
  const [postData, setPostData] = useState({ name: '', email: '',subject:'', message: '',email1:''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (postData.email1 != ''){
      clear();
    }
    else if(postData.name === '' || postData.email === ''|| postData.subject=== '' || postData.message === ''){
      alert("Missing value");
    }else{
      console.log(postData);
      axios.post('https://portfolio-tash7540.herokuapp.com/posts/sendMessage',postData).then((response) => {
        alert(`Thank you ${postData.name}! Your message has been sent!`);
      }, (error) => {
        alert('Error!');
      });
      clear();
    }
  };

  const clear = () => {
    setPostData({ name: '', email: '',subject:'', message: '',email1:''});
  };

  return (
    <div>
      <h1>Send me a Message</h1>
      <Form className='Form-style' onSubmit={handleSubmit}>
        <div className='form-name-email'>
          <Form.Group className = 'Form-group-name'>
            <Form.Control className='input-lg' type='text' placeholder='Name' value={postData.name}  onChange={(e) => setPostData({ ...postData, name: e.target.value })}></Form.Control>
          </Form.Group>
          <Form.Group className = 'Form-group-fakemail'>
            <Form.Control className='input-lg' style={{display: 'none' }} type='email' placeholder='Email' value={postData.email1}  onChange={(e) => setPostData({ ...postData, email1: e.target.value })}></Form.Control>
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
          <button className='button-form' type='submit'>Send</button>
      </Form>
    </div>
  );
}

export default ContactForm;
