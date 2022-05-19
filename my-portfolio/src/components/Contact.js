
import { useState } from "react";
import '../App.css';


function Contact() {
  const [postData, setPostData] = useState({ name: '', email: '', message: ''});


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(postData);
    clear();
  };

  const clear = () => {
    setPostData({ name: '', email: '', message: ''});
};
  return (
    <form onSubmit={handleSubmit}>
      <h1 className='h1-contact'>CONTACT </h1>
        <div className='contact-header'>
            <input className='input-contact' type="text" placeholder="Name"  value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
            <h1 className='h1-test'> 8111 E Yale Ave Denver,CO 80231 </h1>
        </div>
        <div className='contact-header'>
            <input className='input-contact' type="email" aria-describedby="emailHelp" placeholder="Email Address"  value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}/>
            <h1 className='h1-test'> Tamer.Shahwan@colorado.edu</h1>

        </div>
        <div className='contact-header'>
            <textarea className='textarea-contact' rows="5" placeholder ="Message"  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></textarea>
            <h1 className='h1-test'> Mobile: 720-645-9611</h1>

        </div>
        <div className='contact-header'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
  );
}

export default Contact;
