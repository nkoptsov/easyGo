import React, { Component } from 'react';
import CardTrip from '../../Components/CardTrip';
import { Container, CardDeck, Row, Col } from 'reactstrap';

class TripsList extends Component {
  constructor(props){
    super(props);
    this.state= {
      data:[]
    }
  }
  componentDidMount(){
    fetch('/api/trips').then(res => res.json()).then(res => {
      this.setState({data: res});
    })
  }

  render() {
    console.log(this.props);
    const {data} =  this.state;
      return (
          <Container fluid>
              <Row>
                  <CardDeck>
                      {data.map(trip => {
                          return (
                              <Col md="4" style={{padding: '20px 0 0 20px'}}>
                                  <CardTrip key={trip.id} trip={trip}/>
                              </Col>
                          )
                      })}
                  </CardDeck>
              </Row>
          </Container>
      )
  };

}

export default TripsList;
