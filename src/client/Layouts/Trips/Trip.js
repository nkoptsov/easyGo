import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url,
      trip: {},
    };
  }

  componentDidMount() {
    fetch(`/api/${this.state.url}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({ trip: res });
      });
  }

  render() {
    console.log(this.props);
    
    const { trip } = this.state;
    return (
        <div>
          <Header />
            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

                <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardText>Date Start: {trip.dateStart}</CardText>
                    <CardText>Date End: {trip.dateEnd}</CardText>
                    <CardText>Lacation start: {trip.locationStart}</CardText>
                    <CardText>Lacation end: {trip.locationEnd}</CardText>
                    <CardText>Cost of Trip: {trip.tripCost}</CardText>
                    <CardText>Description: {trip.description}</CardText>

                    <Button><Link to={`../trips`}>Назад</Link></Button>

                </CardBody>
            </Card>
        </div>
    )
  };
}



export default Trip;