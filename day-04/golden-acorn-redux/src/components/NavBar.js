import {NavLink} from 'react-router-dom';
var React = require('react');

function NavBar(props) {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/redux">Redux</NavLink>
      <NavLink to="/simple">States</NavLink>
    </div>
  );
}

export default NavBar;
