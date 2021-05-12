import sanityClient from './client';

const createContact = async (navn, email, nummer, tips) => {
  try {
    const response = await sanityClient.create({
      _type: 'kontakt',
      navn,
      email,
      nummer,
      tips,
    });
    console.log(response);
  } catch (error) {
    throw new Error(error);
  }
};

export default createContact;
