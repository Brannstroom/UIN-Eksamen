import { Link } from 'react-router-dom';

const React = require('react');
const BlockContent = require('@sanity/block-content-to-react');

const Post = ({ title, image, alt, link, category, body }) => (
  <div className="post">
    <Link to={link} class="link">
      <img src={image} alt={alt} />
      <p className="arrangement" id={category}>
        {category}
      </p>
    </Link>
    <h3 className="postTitle">{title}</h3>

    <BlockContent blocks={body} />

    <Link to={link}>
      <p className="readMore">Les hele saken &gt;&gt;</p>
    </Link>
  </div>
);

export default Post;
