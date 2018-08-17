import React from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../../Components/Header/Header';

const Home = () => (

  <div>
    <Header />
    <Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <h1>
            Welcome to the EasyGo
        </h1>
      </Col>
    </Row>
  </div>
);

export default Home;
