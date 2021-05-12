import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import SocialMedia from './SocialMedia';

export default function ContactInfo() {
  const [contactInfoData, setContactInfoData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "contactInfo"][0...7] | order(imageId) {
        contactInfoBio,
        imageId,
        'contactInfoIcon': contactInfoIcon.asset->url,
        iconAlt
    }`
      )
      .then((data) => {
        setLoading(false);
        setContactInfoData(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error?.message</p>;

  return (
    <div className="perContactInfo">
      {contactInfoData &&
        contactInfoData.map((contactInfo) => (
          <SocialMedia
            key={contactInfo.imageId}
            icon={contactInfo.contactInfoIcon}
            bio={contactInfo.contactInfoBio}
            iconAlt={contactInfo.iconAlt}
          />
        ))}
    </div>
  );
}
