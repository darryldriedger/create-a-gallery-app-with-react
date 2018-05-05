import React from 'react';
import { NavLink } from 'react-router-dom';

//Navigation uses navlink; automatically sets focus to the clicked link
//Test buttons for home and error page commented out
const Navigator = props => {
  return (
    <nav className="main-nav">
      <ul>
        {/* <li><NavLink exact to={`/`} subject="Home" >Home</NavLink></li> */}
        <li><NavLink exact to={`/cats`} subject="cats" >Cats</NavLink></li>
        <li ><NavLink exact to={`/dogs`} subject="dogs" >Dogs</NavLink></li>
        <li><NavLink exact to={`/coffee`} subject="Coffee" >Coffee</NavLink></li>
        {/* <li><NavLink exact to={`/error`} subject="error" >Error</NavLink></li> */}
      </ul>
    </nav>
  );
};
export default Navigator;
