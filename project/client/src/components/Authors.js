import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Author from './Author';

export default function Authors() {
  const [authorsData, setAuthorsData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "author"][0...5]{
          _id,
        authorName,
        authorRolle,
        authorTextBio,
        authorImageAlt,
        'authorImage': authorImage.asset->url
    }`
      )
      .then((data) => {
        setLoading(false);
        setAuthorsData(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error?.message</p>;

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
      <div className="authors">
        {authorsData &&
          authorsData.map((author) => (
            <Author
              key={author._id}
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
