import React, { useState } from 'react';
import ContactInfo from '../components/ContactInfo';

export default function Kontakt() {
  const [navn, setnavn] = useState();
  const [email, setemail] = useState();
  const [nummer, setnummer] = useState();
  const [tip, settip] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Navn: ${navn}\nEmail: ${email}\nTelefonnummer: ${nummer}\nTips: ${tip} `
    );
  };
  const changeinput = (event) => {
    if (event.target.name === 'name') {
      setnavn(event.target.value);
    } else if (event.target.name === 'email') {
      setemail(event.target.value);
    } else if (event.target.name === 'telefonNummer') {
      setnummer(event.target.value);
    } else if (event.target.name === 'tip') {
      settip(event.target.value);
    }
  };

  return (
    <div className="contactPage">
      <div className="introContact">
        <h2>Kontakt oss</h2>
      </div>
      <div className="contactContent">
        <div className="contactForm">
          <form onSubmit={onSubmit}>
            <input
              className="inputForm"
              value={navn}
              onChange={changeinput}
              type="text"
              placeholder="Navn"
              name="name"
            />
            <input
              className="inputForm"
              value={email}
              onChange={changeinput}
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="inputForm"
              value={nummer}
              onChange={changeinput}
              type="number"
              placeholder="Telefon Nummer"
              name="telefonNummer"
            />
            <textarea
              className="inputFormInfo"
              value={tip}
              onChange={changeinput}
              type="text"
              placeholder="Nyhetstips"
              name="tip"
            />
            <input type="submit" />
          </form>
        </div>
        <div className="contactInfo">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
