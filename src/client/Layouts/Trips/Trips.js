import React,{Component} from 'react';
import Header from '../../Components/Header/Header';
import TripsList from './TripsList';

const Trips = (props) => (

  <div>
    <Header />
    <main>
      
      <TripsList/>
    </main>
  </div>
)

// class Trips extends Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(this.props.url);
//     return(
//       <div>
//     <Header />
//      <main>
      
//       {this.props.children}
//      </main>
//     </div>
//     )
//   }

// } 
export default Trips;