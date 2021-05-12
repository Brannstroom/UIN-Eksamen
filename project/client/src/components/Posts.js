import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Post from './Post';
import '../styles/nyheter.scss';

export default function Posts({ cl }) {
  const [allPostsData, setAllPosts] = useState(null);
  const [postAmount, setPostAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setPostAmount((previousValue) => previousValue + 6);
  };

  useEffect(() => {
    setLoading(true);
    sanityClient
      .fetch(
        `*[_type == "post"]{
        _id,
        title,
        slug,
        'author': author->name,
        imageAlt,
        'category': category->title,
        bodyShort,
        mainImage{
          asset->{
          _id,
          url
          },
        }
      }`
      )
      .then((data) => {
        setLoading(false);
        setAllPosts(data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error?.message</p>;

  return (
    <div className={cl}>
      {allPostsData &&
        allPostsData
          .slice(0, postAmount)
          .map((post) => (
            <Post
              key={post._id}
              category={post.category}
              title={post.title}
              image={post.mainImage.asset.url}
              alt={post.imageAlt}
              link={post.slug.current}
              body={post.bodyShort}
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
