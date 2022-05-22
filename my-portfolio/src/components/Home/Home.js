import {Link} from 'react-router-dom';
import './styles.css';
import {Container,Row,Col,Button} from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>

          <div className='home-div'>
            <h1 className="home-hello">Hello,</h1>
            <h1 className="home-name">My name is Tamer</h1>
            <h1 className='home-description'>I'm a passionate and energtic Full Stack Developer</h1>
            <div>
              <Link to={'/contact'}>
                <Button className='button-home' type='submit'>Contact Me</Button>

                </Link>
            </div>
          </div>

      </Row>
    </Container>
  );
}

export default Home;
