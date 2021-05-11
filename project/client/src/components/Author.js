const Author = ({ name, image, rolle, bio}) => (
  <div className="author">
      <img src={image} alt="potet"/>
        <div className="autherbio">
            <h3>{name}</h3>
            <p> {rolle} </p>
        <article>
            <p>{bio}</p>
        </article>
    </div>
  </div>
);

export default Author;
