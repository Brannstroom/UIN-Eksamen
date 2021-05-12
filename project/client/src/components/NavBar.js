import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import sanityClient from '../utils/client.js';

export default function NavBar() {
  const [navbarLogo, setnavbarLogo] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "companyLogo"]{
          _id,
        'companyIcon': companyIcon.asset->url,
        companyiconAlt
    }`
      )
      .then((data) => setnavbarLogo(data))
      .catch(console.error);
  }, []);

  return (
    <header className="navigationBar">
      <NavLink to="/" exact>
        {navbarLogo &&
          navbarLogo.map((companylogo) => (
            <img
              key={companylogo._id}
              className="navimg"
              src={companylogo.companyIcon}
              width="100%"
              alt="Game UIN Logo"
            />
          ))}
      </NavLink>
      <div>
        <nav>
          <NavLink className="navbar" to="/" exact>
            Hjem
          </NavLink>
          <NavLink className="navbar" to="/Kontakt">
            Kontakt oss
          </NavLink>
          <NavLink className="navbar" to="/Galleri">
            Galleri
          </NavLink>
          <NavLink className="navbar" to="/Omoss">
            Om oss
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
