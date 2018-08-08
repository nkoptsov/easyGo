import { connect } from 'react-redux';

import TripsSearchForm from '../../Components/TripsSearchForm/TripsSearchForm';
import { searchTrips } from '../../Actions';

const mapDispatchToProps = dispatch => ({
  handleSearchSubmit: (formData) => {
    dispatch(searchTrips(formData));
  },
});

export default connect(
  mapDispatchToProps,
)(TripsSearchForm);
