import React, { useState } from 'react';
import ContactInfo from '../components/ContactInfo';
import sanityClient from '../client.js';

export default function Kontakt() {
  const [Loading, setLoading] = useState();
  const [navn, setnavn] = useState();
  const [email, setemail] = useState();
  const [nummer, setnummer] = useState();
  const [tip, settip] = useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = await sanityClient.create().catch((error) => {
      console.log(error);
      setLoading(false);
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

  export const Contact = () => {
    console.log('Contact')
    return(
      <div className="contactForm">
        {/* kontakt info*/}
      </div>
    );
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
              required
            />
            <input
              className="inputForm"
              value={email}
              onChange={changeinput}
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="inputForm"
              value={nummer}
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
