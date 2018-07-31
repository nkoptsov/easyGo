import React from 'react';
import Header from '../../Components/Header/Header';
import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';

class Search extends React.Component {
    handleSearchSubmit = (formData) => {
       fetch(`/api/users/trips/search?${formData}`)
            .then((res) => {
                if (res.status === 200) this.setState({ data: res });
            })
            .catch(err => console.log(`request failed ${err.message}`));
    }

    render(){
        return(
            <div>
                <Header />
                <main>
                    <TripsSearchForm handleSearchSubmit={this.handleSearchSubmit} />
                </main>
            </div>
        );
    }
}

export default Search;