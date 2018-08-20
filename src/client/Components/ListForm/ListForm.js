import React from 'react';
import { Link } from 'react-router-dom';

const ListForm = () => (

  <div className="list-group col-2 float-left">
    <Link
      to="/profile/account"
      className="list-group-item list-group-item-action"
    >
      profile
    </Link>

    <Link
      to="/profile/password"
      className="list-group-item list-group-item-action"
    >
      password
    </Link>

    <Link
      to="/profile/photo"
      className="list-group-item list-group-item-action"
    >
      avatar
    </Link>
  </div>
);

export default ListForm;
