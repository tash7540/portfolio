import myImg from '../IMG_E3395.JPG';
function About() {
  return (
    <div>
      <h3 className="my-name">Hello, I'm Tamer!</h3>
      <h1>I'm a energtic and passionate full stack developer</h1>
      <img src={myImg} alt="myimg" ></img>
      <h1> I just graduated from the University of Colorado at Boulder with a Bachelor of Science in Computer Science.</h1>
    </div>
  );
}

export default About;
