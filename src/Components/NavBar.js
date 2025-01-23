import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFile, faCartShopping, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="Container">
      <div className="left_side">
        <h3>
          Kari<span>X</span>
        </h3>
      </div>
      <div className="right_side">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          Home
        </Link>
        <Link to={"/complement"}>
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          Complement
        </Link>
        <Link to={"/coach"}>
          <FontAwesomeIcon icon={faDumbbell} className="icon" />
          Coach
        </Link>
        <Link to={"/contact"}>
          <FontAwesomeIcon icon={faFile} className="icon" />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
