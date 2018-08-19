import React from 'react';
import {
  Container, CardDeck, Row, Col, CardGroup,
} from 'reactstrap';
import CardTrip from './CardTrip';

const TripsView = ({ trips, path }) => (
  <Container fluid>
    <Row>
      <CardGroup>
        <CardDeck>
          {trips.map(trip => (
            <Col key={trip.id} xs="auto" style={{ padding: '20px 0 0 20px' }}>
              <CardTrip key={trip.id} trip={trip} path={path} />
            </Col>
          ))}
        </CardDeck>
      </CardGroup>
    </Row>
  </Container>
);

export default TripsView;
