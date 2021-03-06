import React from 'react';
import './header.css';
import PropTypes from 'prop-types';


const Header = ({upDateData}) => {
  return (
    <div className="header">
      <button onClick={(event) => upDateData(event)}>
       People
      </button>
      <button onClick={(event) => upDateData(event)}>
       Planets
      </button>
      <button onClick={(event) => upDateData(event)}>
       Vehicles
      </button>
      <button onClick={(event) => upDateData(event)}>
       Favorites
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  upDateData: PropTypes.func
};
