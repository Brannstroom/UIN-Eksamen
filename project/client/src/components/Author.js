const Author = ({ name, image, alt, rolle, bio }) => (
  <div className="authordiv">
    <div className="authorOne">
      <div className="authorFacePhoto">
        <img
          style={{ width: '100%', border: '2px solid' }}
          src={image}
          alt={alt}
        />
      </div>
    </div>
    <div className="authorTwo">
      <div className="authorbiocss">
        <h3>{name}</h3>
        <p>{rolle}</p>
        <article>
          <p>{bio}</p>
        </article>
      </div>
    </div>
  </div>
);

export default Author;
