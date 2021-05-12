import React, { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import createContact from '../utils/contactService';

export default function Kontakt() {
  const [Loading, setLoading] = useState();
  const [navn, setnavn] = useState();
  const [email, setemail] = useState();
  const [nummer, setnummer] = useState();
  const [tip, settip] = useState();
  const [status, setStatus] = useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    createContact(navn, email, nummer, tip)
      .then(() => {
        setStatus('Tusen takk for tipset!');
        setLoading(false);
      })
      .catch(() => {
        setStatus('En feil skjedde');
      });

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

  if (Loading) return <p>Loading...</p>;

  return (
    <div className="contactPage">
      <h2>{status}</h2>
      <div className="introContact">
        <h2>Kontakt oss</h2>
      </div>
      <div className="contactContent">
        <div className="contactForm">
          <form onSubmit={onSubmit}>
            <input
              className="inputForm"
              value={navn || ''}
              onChange={changeinput}
              type="text"
              placeholder="Navn"
              name="name"
              required
            />
            <input
              className="inputForm"
              value={email || ''}
              onChange={changeinput}
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="inputForm"
              value={nummer || ''}
              onChange={changeinput}
              type="number"
              placeholder="Telefon Nummer"
              name="telefonNummer"
              required
            />
            <textarea
              className="inputFormInfo"
              value={tip}
              onChange={changeinput}
              type="text"
              placeholder="Nyhetstips"
              name="tip"
              required
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
