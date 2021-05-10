import React, { useState } from 'react';

export default function Kontakt() {
  const [fornavn, setfornavn] = useState();
  const [etternavn, setetternavn] = useState();
  const [email, setemail] = useState();
  const [tip, settip] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Fornavn: ${fornavn}\nEtternavn: ${etternavn}\nEmail: ${email}\nTips: ${tip} `
    );
  };
  const changeinput = (event) => {
    if (event.target.name === 'firstName') {
      setfornavn(event.target.value);
    } else if (event.target.name === 'lastName') {
      setetternavn(event.target.value);
    } else if (event.target.name === 'email') {
      setemail(event.target.value);
    } else if (event.target.name === 'tip') {
      settip(event.target.value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={fornavn}
        onChange={changeinput}
        type="text"
        placeholder="fornavn"
        name="firstName"
      />
      <input
        value={etternavn}
        onChange={changeinput}
        type="text"
        placeholder="Etternavn"
        name="lastName"
      />
      <input
        value={email}
        onChange={changeinput}
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        value={tip}
        onChange={changeinput}
        type="text"
        placeholder="Nyhetstips"
        name="tip"
      />
      <input type="submit" />
    </form>
  );
}
