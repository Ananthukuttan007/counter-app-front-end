import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(function (response) {
        setState(response.data.result[0]);
        console.log(response.data.result[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [state])
  const updateNumber = (e) => {
    e.preventDefault();
    // setState(state + 1)
    let DATA = {
      number: state.number + 1
    }
    axios.put('http://localhost:8080/', DATA)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.message);
        alert('error')
      });
  }


  return (
    <Container className="d-flex justify-content-center" style={{ height: '80vh' }}>
      <Card style={{ width: '18rem' }} className="my-auto">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">{state.number}</Card.Title>
          <br />
          <div class="col text-center d-grid gap-2">
            <Button variant="primary" onClick={updateNumber}>Add</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
