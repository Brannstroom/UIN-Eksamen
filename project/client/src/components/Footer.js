import React from 'react';
import logo from '../images/gameuin.png';
import fblogo from '../images/facebook.png';
import iglogo from '../images/instagram.png';
import lilogo from '../images/linkedIn.png';
import twlogo from '../images/twitter.png';
import locationlogo from '../images/location.png';
import maillogo from '../images/mail.png';
import phonelogo from '../images/phone.png';

export default function Footer() {
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
                <a href="/Nyheter">Nyheter</a>
              </li>
              <li>
                <a href="/Kontakt">Kontakt Oss</a>
              </li>
              <li>
                <a href="/Galleri">Galleri</a>
              </li>
              <li>
                <a href="/Om">Om Oss</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divcolumn">
          <img src={logo} width="30%" alt="Game UIN Logo" />
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
