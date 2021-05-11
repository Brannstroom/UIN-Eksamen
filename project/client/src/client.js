import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '8xv4t2s6',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
});
