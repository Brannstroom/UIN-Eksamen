import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Post from './Post';
import '../styles/nyheter.scss';

export default function Posts({ cl }) {
  const [allPostsData, setAllPosts] = useState(null);
  const [postAmount, setPostAmount] = useState(12);

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
        'category': category->title,
        body,
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

  function handleBody(body) {
    console.log(body);
    return body;
  }

  return (
    <div className={cl}>
      {allPostsData &&
        allPostsData
          .slice(0, postAmount)
          .map((post) => (
            <Post
              category={post.category}
              title={post.title}
              image={post.mainImage.asset.url}
              alt={post.imageAlt}
              link={post.slug.current}
              body={handleBody(post.body)}
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
