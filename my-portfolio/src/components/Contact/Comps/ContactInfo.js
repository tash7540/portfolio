import '../styles.css';
import {GoMarkGithub } from "react-icons/go";
import {AiFillLinkedin,AiFillFacebook} from "react-icons/ai";

function ContactInfo() {
  return (
    <div>
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
    </div>
  );
}

export default ContactInfo;
