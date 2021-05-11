import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import Author from './Author';

export default function Authors(){
    const [authorsData, setAuthorsData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "author"][0...5]{
            name,
            rolle,
            bio{
                children->{
                    text
                },
            },
            image
        }`
        )
        .then((data) => setAuthorsData(data))
        .catch(console.error);
}, []);

return (
    <div>
        {authorsData && authorsData.map((author) => (
            <Author 
                name={author.name}
                rolle={author.rolle}
                bio={author.children.text}
                image={author.image}
            />
        ))}
    </div>
    );
}