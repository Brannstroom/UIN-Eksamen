import sanityClient from '@sanity/client';

const options = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
  token: process.env.REACT_APP_SANITY_WRITE_TOKEN,
  tame: process.env.REACT_APP_ADD_YOUR_NAME,
};

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
