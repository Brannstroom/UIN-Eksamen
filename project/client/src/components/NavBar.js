import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/gameuin.png';

export default function NavBar() {
  return (
    <header>
      <NavLink to="/" exact>
        <img src={logo} width="20%" alt="Game UIN Logo" />
      </NavLink>
      <div>
        <nav>
          <NavLink className="navbar" to="/" exact>
            Hjem
          </NavLink>
          <NavLink className="navbar" to="/Nyheter">
            Nyheter
          </NavLink>
          <NavLink className="navbar" to="/Kontakt">
            Kontakt oss
          </NavLink>
          <NavLink className="navbar" to="/Galleri">
            Galleri
          </NavLink>
          <NavLink className="navbar" to="/Om">
            Om oss
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
