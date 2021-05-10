import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getPost } from '../utils/postService';

const Hjem = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const post = await getPost('post');
      console.log(post);
      setData(post);
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Title title={data.title} />
      <Cards>
        {data.cards.length > 0 &&
          data.cards.map((card) => <Card key={card._key} />)}
      </Cards>
    </Container>
  );
};

export default Hjem;
