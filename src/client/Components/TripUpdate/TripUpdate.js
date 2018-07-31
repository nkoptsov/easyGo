import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import Header from '../../Components/Header/Header';

export default class TripUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.params.tripId,
      trip: {
        name: '',
        dateStart: '',
        dateEnd: '',
        locationStart: '',
        locationEnd: '',
        tripCost: '',
        description: ''
      },
    };
    this.onChange = this.onChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onChange(e) {
    
    this.setState({
       trip: {[e.target.name]: e.target.value}
    })
    

    // const aa = Object.assign({}, this.state.trip, {
    //   [e.target.name]: e.target.value
    // });

    // this.setState({ trip: aa });

  }

  handleEdit(event) {

    event.preventDefault()
    let data = {
      name: this.state.trip.name,
      dateStart: this.state.trip.dateStart,
      dateEnd: this.state.trip.dateEnd,
      locationStart: this.state.trip.locationStart,
      locationEnd: this.state.trip.locationEnd,
      tripCost: this.state.trip.tripCost,
      description: this.state.trip.description
    }
    fetch(`/api/users/trips/created/${this.state.url}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      }).then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      }).then(data => {
        console.log(data)
        if (data === "success") {
          this.setState({
            trip: data
          });
        }
      }).catch(err => {
        console.log(err)
      });
  }



  componentDidMount() {
    fetch(`/api/users/trips/created/${this.state.url}`,
      { credentials: 'include' })
      .then(res =>
        res.json()
      ).then(value => {
        console.log(value);
        this.setState({ trip: value });
      });
  }
  render() {
    return (
     
      <div>
         <Header />
         <Container>
        <Form onSubmit={this.handleEdit} method="PUT">
          <FormGroup>
            <Label for="tripName">name</Label>
            <Input type="text" name="name" value={this.state.trip.name} onChange={this.onChange} id="tripName" />
          </FormGroup>
          <FormGroup>
            <Label for="tripDateStart">Date Start</Label>
            <Input type="date" name="dateStart" value={this.state.trip.dateStart} onChange={this.onChange} id="tripDateStart" placeholder="trip date start" />
          </FormGroup>
          <FormGroup>
            <Label for="tripDateEnd">Date End</Label>
            <Input type="date" name="dateEnd" value={this.state.trip.dateEnd} onChange={this.onChange} id="tripDateEnd" placeholder="trip date end" />
          </FormGroup>
          <FormGroup>
            <Label for="tripStart">location start</Label>
            <Input type="text" name="locationStart" value={this.state.trip.locationStart} onChange={this.onChange} id="tripStart" placeholder="location start" />
          </FormGroup>
          <FormGroup>
            <Label for="tripEnd">location end</Label>
            <Input type="text" name="locationEnd" value={this.state.trip.locationEnd} onChange={this.onChange} id="tripEnd" placeholder="location end" />
          </FormGroup>
          <FormGroup>
            <Label for="tripCost">cost of trip</Label>
            <Input type="text" name="tripCost" value={this.state.trip.tripCost} onChange={this.onChange} id="tripCost" placeholder="trip cost" />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" value={this.state.trip.description} onChange={this.logChange} id="description" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Container>
      </div>
        );
  }
}
