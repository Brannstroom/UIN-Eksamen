import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Photo from './Photo';

export default function Posts() {
  const [allPhotosData, setAllPhotos] = useState(null);
  const [photoLimit, setPhotoLimit] = useState(3);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const morePictures = () => {
    setPhotoLimit((previousValue) => previousValue + 3);
  };

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "galleri"]{
          _id,
        'galleriImage': galleriImage.asset->url,
        galleriImageAlt
    }`
      )
      .then((data) => {
        setLoading(false);
        setAllPhotos(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error?.message</p>;

  return (
    <div>
      <div className="introGalleri">
        <h2>Galleri</h2>
        <p>
          Her i galleriet legger vi ut bilder av ting og tang som vi finner
          interessant, morsomt eller alt annet som har noe med Game UIN å gjøre.
          Her kan det brått komme noe om alt innenfor Game UIN, spill og
          e-sport.
        </p>
      </div>
      <div className="photos">
        {allPhotosData &&
          allPhotosData
            .slice(0, photoLimit)
            .map((photo) => (
              <Photo
                key={photo._id}
                image={photo.galleriImage}
                alt={photo.galleriImageAlt}
              />
            ))}
      </div>
      <div className="loadMorePhotos">
        <button type="button" onClick={morePictures}>
          Last inn flere bilder
        </button>
      </div>
    </div>
  );
}
