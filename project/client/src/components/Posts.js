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
        allPostsData.map((post) => (
          <Post
            title={post.title}
            image={post.mainImage.asset.url}
            alt={post.imageAlt}
            link={post.slug.current}
            categories={post.categories}
          />
        ))}
    </div>
  );
}
