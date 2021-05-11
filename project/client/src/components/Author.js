const Author = ({ name, image, alt, rolle, bio }) => (
  <div className="authordiv">
    <img
      style={{ width: 150, height: 150, borderRadius: 400 / 2 }}
      src={image}
      alt={alt}
    />
    <div className="authorbiocss">
      <h3>{name}</h3>
      <p>{rolle}</p>
      <article>
        <p>{bio}</p>
      </article>
    </div>
  </div>
);

export default Author;
