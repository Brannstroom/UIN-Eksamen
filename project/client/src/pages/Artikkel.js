import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import Article from '../components/Article.js';

export default function Artikkel() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
           imageAlt,
         body,
         bodyShort,
         'authorImage': author->authorImage{
             asset->{
                 _id,
                 url
             },
         },
         'authorImageAlt': author->authorImageAlt,
         'authorName': author->authorName,
         'authorRole': author->authorRolle,
         'category': category->title,
       }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return <Article post={post} />;
}
