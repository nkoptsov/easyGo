import React from 'react';
import { Link, Button } from 'react-router-dom';
import CardTrip from './CardTrip';
import { Container, CardDeck, Row, Col } from 'reactstrap';

const TripsView = props => (
  <Container fluid>
    <Row>
      <CardDeck>
        {props.data.map(trip => (
          <Col style={{ padding: '20px 0 0 20px' }}>
            <CardTrip key={trip.id} trip={trip} />
          </Col>
        ))}
      </CardDeck>
    </Row>
  </Container>
);

export default TripsView;
