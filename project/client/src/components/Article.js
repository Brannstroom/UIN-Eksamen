import BlockContent from '@sanity/block-content-to-react';
import '../styles/artikkel.scss';
import sanityClient from '../client.js';

const Article = ({ post }) => (
  <div className="artikkel">
    <div className="artikkelWrapper">
      <div className="artikkelHeader">
        <div className="artikkelBilde">
          <img src={post.mainImage.asset.url} alt={post.imageAlt} />
          <p>{post.imageAlt}</p>
        </div>
        <div className="artikkelAuthor">
          <img src={post.authorImage.asset.url} alt={post.authorImageAlt} />
          <p>
            {post.authorRole}
            <br />
            <b>{post.authorName}</b>
          </p>
          <p className="artikkelCategory" id={post.category}>
            {post.category}
          </p>
        </div>
      </div>
    </div>
    <div className="artikkelBody">
      <h2>{post.title}</h2>
      <h4>{post.name}</h4>
      <BlockContent
        blocks={post.body}
        projectId={sanityClient.projectId}
        dataset={sanityClient.dataset}
      />
    </div>
  </div>
);

export default Article;
