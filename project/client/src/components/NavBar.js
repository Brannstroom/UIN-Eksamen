import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Hjem
          </NavLink>
          <NavLink to="/Nyheter">Nyheter</NavLink>
          <NavLink to="/Kontakt">Kontakt oss</NavLink>
          <NavLink to="/Om">Om oss</NavLink>
          <NavLink to="/Galleri">Galleri</NavLink>
        </nav>
      </div>
    </header>
  );
}
