import client from './client';

const postFields = `
    title,
    slug,
    author,
    mainImage,
    categories
  `;

export const getPost = async (slug) => {
  const data = await client.fetch(`*[_type == "post"]{${postFields}}`, {
    slug,
  });
  return data;
};
