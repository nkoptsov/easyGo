import React from 'react';
import {
  Container, CardDeck, Row, Col, CardGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import CardTrip from './CardTrip';


const TripsView = trips => (
  <Container fluid main-container>
    <Row>
      <CardGroup>
        <CardDeck>
          {trips.map(trip => (
            <Col key={trip.id} xs="auto" style={{ padding: '20px 0 0 20px' }}>
              <CardTrip key={trip.id} trip={trip} />
            </Col>
          ))}
        </CardDeck>
      </CardGroup>
    </Row>
  </Container>
);

const mapStateToProps = state => ({
  trips: state.trips,
});

export default connect(mapStateToProps)(TripsView);
