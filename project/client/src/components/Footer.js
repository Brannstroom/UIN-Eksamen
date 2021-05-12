import React, { useEffect, useState } from 'react';
import fblogo from '../images/facebook.webp';
import iglogo from '../images/instagram.webp';
import lilogo from '../images/linkedIn.webp';
import twlogo from '../images/twitter.webp';
import locationlogo from '../images/location.webp';
import maillogo from '../images/mail.webp';
import phonelogo from '../images/phone.webp';
import sanityClient from '../client.js';

export default function Footer() {
  const [navbarLogo, setnavbarLogo] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "companyLogo"]{
        'companyIcon': companyIcon.asset->url,
        companyiconAlt
    }`
      )
      .then((data) => setnavbarLogo(data))
      .catch(console.error);
  }, []);

  return (
    <footer>
      <div className="footerbox">
        <div className="divcolumn">
          <h1 className="footerTittel">Hurtiglinker</h1>
          <div className="divcenter">
            <ul style={{ listStyle: 'revert' }}>
              <li>
                <a href="/">Hjem</a>
              </li>
              <li>
                <a href="/Kontakt">Kontakt Oss</a>
              </li>
              <li>
                <a href="/Galleri">Galleri</a>
              </li>
              <li>
                <a href="/Omoss">Om Oss</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divcolumn">
          {navbarLogo &&
            navbarLogo.map((companylogo) => (
              <img
                src={companylogo.companyIcon}
                width="40%"
                alt="companyiconAlt"
              />
            ))}
          <p className="footerP">
            Gamer UIN er en blog som skriver saker og artikkeler som angår
            temaer rundt spill, arrangementer, turneringer, osv.
          </p>
        </div>
        <div className="divcolumn">
          <div>
            <p>
              <img
                className="footerinfo"
                src={phonelogo}
                width="8%"
                alt="telefon logo"
              />
              911 911 911
            </p>
          </div>
          <div>
            <p>
              <a className="footerinfo" href="kontakt@game.uin">
                <img src={maillogo} width="8%" alt="mail logo" />
              </a>
              kontakt@game.uin
            </p>
          </div>
          <div>
            <p>
              <a
                className="footerinfo"
                href="https://goo.gl/maps/ZGNXbFWsSYbkxgx16"
              >
                <img src={locationlogo} width="8%" alt="location logo" />
              </a>
              B R A veien 4, 1757 Halden
            </p>
          </div>
          <div className="socialLogo">
            <a className="socialmedia" href="http://localhost:3000/">
              <img src={fblogo} width="10%" alt="Facebook logo" />
            </a>
            <a className="socialmedia" href="http://localhost:3000/">
              <img src={iglogo} width="10%" alt="Instagram logo" />
            </a>
            <a className="socialmedia" href="http://localhost:3000/">
              <img src={twlogo} width="10%" alt="Twitter logo" />
            </a>
            <a className="socialmedia" href="http://localhost:3000/">
              <img src={lilogo} width="10%" alt="LinkedIn logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
