import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Photo from './Photo';

export default function Posts() {
  const [allPhotosData, setAllPhotos] = useState(null);
  const [photoLimit, setPhotoLimit] = useState(10);

  const morePictures = () => {
    setPhotoLimit((previousValue) => previousValue + 5);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "image"]{
        galleriImage{
          asset->{
            _id,
            url
          },
        },
        galleriImageAlt
    }`
      )
      .then((data) => setAllPhotos(data))
      .catch(console.error);
  }, []);

  return (
    <div className="photos">
      {allPhotosData &&
        allPhotosData
          .slice(0, photoLimit)
          .map((photo) => (
            <Photo
              image={photo.galleriImage.asset.url}
              alt={photo.galleriImageAlt}
            />
          ))}
      <div className="loadMorePhotos">
        <button type="button" onClick={morePictures}>
          Last inn flere bilder
        </button>
      </div>
    </div>
  );
}
