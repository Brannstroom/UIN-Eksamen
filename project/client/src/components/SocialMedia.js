const SocialMedia = ({ icon, bio, iconAlt }) => (
  <div className="socialMediaDiv">
    <img src={icon} alt={iconAlt} />
    <h4>{bio}</h4>
  </div>
);

export default SocialMedia;
