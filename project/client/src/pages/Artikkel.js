import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../client.js';
import '../styles/artikkel.scss';

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
       }`,
        { slug }
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
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
}
