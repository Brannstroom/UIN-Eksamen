import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Post from './Post';

export default function Posts() {
  const [allPostsData, setAllPosts] = useState(null);
  const [postAmount, setPostAmount] = useState(3);

  const loadMore = () => {
    setPostAmount((previousValue) => previousValue + 6);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        'author': author->name,
        imageAlt,
        'categories': categories->name,
        mainImage{
          asset->{
          _id,
          url
        },
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="posts">
      {allPostsData &&
        allPostsData
          .slice(0, postAmount)
          .map((post) => (
            <Post
              title={post.title}
              image={post.mainImage.asset.url}
              alt={post.imageAlt}
              link={post.slug.current}
              categories={post.categories}
            />
          ))}
      <div className="loadMoreButton">
        <button type="button" onClick={loadMore}>
          Last inn fler artikler
        </button>
      </div>
    </div>
  );
}
