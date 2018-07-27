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
            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

                <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardSubtitle>Date Start {trip.dateStart}</CardSubtitle>
                    <CardSubtitle>Date End {trip.dateEnd}</CardSubtitle>
                    <CardText>{trip.description}</CardText>
                    <Button><Link to={`../trips`}>Назад</Link></Button>

                </CardBody>
            </Card>
        </div>
        /*
      <main id="trip">
        <Header />
        <div>
          <div>
            <section>
              <h1>{trip.name}</h1>

              <p>{trip.dateStart}</p>
              <p>{trip.dateEnd}</p>
              <p>{trip.tripCost}</p>
              <p>{trip.locationStart}</p>
              <p>{trip.locationEnd}</p>
              <p>{trip.description}</p>
              ---------------------------
          </section>
          </div>
        </div>

      </main>
      */
    )
  };
}



export default Trip;