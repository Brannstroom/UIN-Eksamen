import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Post from './Post';

export default function Posts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {allPostsData &&
        allPostsData.map((post) => (
          <Post
            title={post.title}
            author={post.author}
            image={post.mainImage.asset.url}
            alt="hei"
            link={post.slug.current}
          />
        ))}
    </div>
  );
}
