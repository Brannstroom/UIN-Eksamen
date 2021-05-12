import { Link } from 'react-router-dom';

const React = require('react');

const Post = ({ title, image, alt, link, category, body }) => (
  <div className="post">
    <div className="postContent">
      <h3 className="postTitle">{title}</h3>
      <i>{body}</i>
      <Link to={`artikkel/${link}`}>
        <p className="readMore">Les hele saken &gt;&gt;</p>
      </Link>
    </div>

    <Link to={`artikkel/${link}`} className="link">
      <img src={image} alt={alt} />
      <p className="arrangement" id={category}>
        {category}
      </p>
    </Link>
  </div>
);

export default Post;
