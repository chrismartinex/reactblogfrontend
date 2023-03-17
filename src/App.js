import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center' >
          <h1>Blog Site</h1>
        </Col>
      </Row>
      <Dashboard />
    </Container>
  );
}

export default App;
