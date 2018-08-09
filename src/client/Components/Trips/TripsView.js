import React from 'react';
import {
  Container, CardDeck, Row, Col, CardGroup,
} from 'reactstrap';
import CardTrip from './CardTrip';

const TripsView = props => (
  <Container fluid>
    <Row>
      <CardGroup>
        <CardDeck>
          {props.data.map((trip) => (
            <Col key={trip.id} xs="auto" style={{ padding: '20px 0 0 20px' }}>
              <CardTrip trip={trip} />
            </Col>
          ))}
        </CardDeck>
      </CardGroup>
    </Row>
  </Container>
);

export default TripsView;
