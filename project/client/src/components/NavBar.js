import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/gameuin.png';

export default function NavBar() {
  return (
    <header>
      <img src={logo} width="20%" alt="Game UIN Logo" />
      <div>
        <nav>
          <NavLink to="/" exact>
            Hjem
          </NavLink>
          <NavLink to="/Nyheter">Nyheter</NavLink>
          <NavLink to="/Kontakt">Kontakt oss</NavLink>
          <NavLink to="/Galleri">Galleri</NavLink>
          <NavLink to="/Om">Om oss</NavLink>
        </nav>
      </div>
    </header>
  );
}
