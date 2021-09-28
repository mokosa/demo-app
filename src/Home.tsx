import React from 'react';
import './Home.sass';

import { Col, Container, Row, Table } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Icon from './components/Icon';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbar />
        <Container>
          <Row>
            <Col>Content goes here</Col>
          </Row>
          <Col>
            <Icon />
          </Col>
          <Col>
            <Icon />
          </Col>
          <Col>
            <Icon />
          </Col>
          <Row>
            <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
