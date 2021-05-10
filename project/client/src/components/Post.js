import { Link } from 'react-router-dom';

const Post = ({ title, image, alt, link, categories }) => (
  <div className="post">
    <Link to={link}>
      <img src={image} alt={alt} />
      <p> {categories} </p>
    </Link>
    <h3>{title}</h3>
    <Link to={link}>
      <p>Les hele saken &gt;&gt;</p>
    </Link>
  </div>
);

export default Post;
