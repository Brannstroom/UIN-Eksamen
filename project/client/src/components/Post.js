import { Link } from 'react-router-dom';

const Post = ({ title, author, image, alt, link }) => (
  <>
    <Link to={link}>
      <h1>{title}</h1>
      <img src={image} alt={alt} />
      <p>{author}</p>
    </Link>
  </>
);

export default Post;
