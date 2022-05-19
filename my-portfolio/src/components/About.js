import myImg from '../IMG_E3395.JPG';
import {Link} from 'react-router-dom';
function About() {
  return (
    <div>
      <h3 className="my-name">Hello, I'm Tamer!</h3>
      <h1>I'm a energtic and passionate full stack developer</h1>
      <h1> I just graduated from the University of Colorado at Boulder with a Bachelor of Science in Computer Science.</h1>
      <div>
        <Link to={'/contact'}>
          <button type="button">Contact Me!</button>
          </Link>
      </div>
    </div>
  );
}

export default About;
