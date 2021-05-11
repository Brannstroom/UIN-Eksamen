import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Author from './Author';
import tema1 from '../images/tema3.jpg';
import tema2 from '../images/tema2.jpg';
import tema3 from '../images/tema1.jpg';

export default function Authors() {
  const [authorsData, setAuthorsData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"][0...5]{
        authorName,
        authorRolle,
        authorTextBio,
        authorImageAlt,
        'authorImage': authorImage.asset->url
    }`
      )
      .then((data) => setAuthorsData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="omOss">
      <div className="introOmOss">
        <h2>Om Oss</h2>
        <p>
          På Game UIN så jobber vi med å holde våre lesere oppdatert på hve som
          skjer under Spill arrangementer, hva som pågår i bakgrunnen i e-sport
          miljøet og hvorda lag og spillere skårer på turneringene.
        </p>
      </div>
      <div className="omOssRow">
        <div className="omOssColumn">
          <img width="100%" src={tema1} alt="e-sport" />
          <div className="omOssTema">
            <h3>E-Sport</h3>
            <p>
              Vi legger et stort fokus på hvordan de forkjellige lagene i
              miljøet gror, og hvorda dems fremgang i e-sport miljøet er.
            </p>
          </div>
        </div>
        <div className="omOssColumn">
          <img width="100%" src={tema2} alt="turnering" />
          <div className="omOssTema">
            <h3>Turneringer</h3>
            <p>
              Vi prøver alltid å holde våre lesere oppdatert på hvordan det
              ligger ann med lagene på turneringer og kampene dems.
            </p>
          </div>
        </div>
        <div className="omOssColumn">
          <img width="100%" src={tema3} alt="arrangemang" />
          <div className="omOssTema">
            <h3>Arrangementer</h3>
            <p>
              Vi reiser til forkjellige turneringer og arrangementer for å
              skrive spennende artikkler for leserne våre.
            </p>
          </div>
        </div>
      </div>
      <div className="authors">
        {authorsData &&
          authorsData.map((author) => (
            <Author
              name={author.authorName}
              rolle={author.authorRolle}
              bio={author.authorTextBio}
              image={author.authorImage}
              alt={author.authorImageAlt}
            />
          ))}
      </div>
    </div>
  );
}
