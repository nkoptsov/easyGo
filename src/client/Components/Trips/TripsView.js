import React from 'react';
import CardTrip from './CardTrip';
import { Container, CardDeck, Row, Col, CardGroup } from 'reactstrap';

const TripsView = props => (
  <Container fluid main-container>
    <Row>
        <CardGroup>
      <CardDeck>
        {props.data.map(trip => (
          <Col xs="auto" style={{ padding: '20px 0 0 20px' }}>
            <CardTrip key={trip.id} trip={trip} />
          </Col>
        ))}
      </CardDeck>
        </CardGroup>
    </Row>
  </Container>
);

export default TripsView;
