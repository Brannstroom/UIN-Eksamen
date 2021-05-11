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
        'galleriImage': galleriImage.asset->url,
        galleriImageAlt
    }`
      )
      .then((data) => setAllPhotos(data))
      .catch(setError(error));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!error) return <p>error?.message</p>;

  return (
    <div>
      <div className="introGalleri">
        <h2>Galleri</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="photos">
        {allPhotosData &&
          allPhotosData
            .slice(0, photoLimit)
            .map((photo) => (
              <Photo image={photo.galleriImage} alt={photo.galleriImageAlt} />
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
