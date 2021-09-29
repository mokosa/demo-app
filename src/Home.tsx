import React, { FunctionComponent } from 'react';
import './Home.sass';

import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Icon from './components/Icon';
import Button from './components/Button';
import Table, { TableDataset } from './components/Table';

const tableData: TableDataset = {
  columnLabels: ['#', 'First Name', 'Last Name', 'Username', ''],
  rows: [
    [1, 'Ursula', 'Otto', '@udo'],
    [2, 'Jacob', 'Doe', '@jdoe'],
    [3, 'Maria', 'Smith', '@msm'],
  ],
};

export const Home: React.FunctionComponent = () => {
  const actions = () => (
    <React.Fragment>
      <Button size="sm">
        <Icon name="edit" />
      </Button>
      <Button size="sm">
        <Icon name="delete" />
      </Button>
    </React.Fragment>
  );

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
            <Table dataset={tableData} actions={actions} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
