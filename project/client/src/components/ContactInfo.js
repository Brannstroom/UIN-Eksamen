import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import SocialMedia from './SocialMedia';

export default function ContactInfo() {
  const [contactInfoData, setContactInfoData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactInfo"][0...7] | order(imageId) {
        contactInfoBio,
        imageId,
        'contactInfoIcon': contactInfoIcon.asset->url,
        iconAlt
    }`
      )
      .then((data) => setContactInfoData(data))
      .catch(console.error);
  }, []);

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
