import React, { useState } from 'react';
import { Button, Flex, Center } from '@chakra-ui/react';

const genres = [
    'Action', 'Adventure', 'Comedy', 'Drama', 'Horror',
    'Romance', 'Sci-Fi', 'Thriller', 'Fiction', 'Fantasy',
    'Mystery', 'Crime', 'Animation', 'Family', 'Musical',
    'War', 'History', 'Sport'
];

function UserInput() {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreToggle = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
        } else {
            if (selectedGenres.length < 6) {
                setSelectedGenres([...selectedGenres, genre]);
            }
        }
    };

    const handleSubmit = () => {
        if (selectedGenres.length >= 3 && selectedGenres.length <= 6) {
            console.log(JSON.stringify({ selectedGenres }))
            fetch('http://127.0.0.1:5000/api/userinput', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selectedGenres })
            })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    console.log('Genres sent successfully');
                } else {
                    throw new Error('Failed to send genres');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('Please select between 3 and 6 genres.');
        }
    };

    return (
        <>
            <h1>Testing</h1>
            <Center>
                <Flex flexWrap="wrap" justifyContent="center">
                    {genres.map((genre) => (
                        <div
                            key={genre}
                            onClick={() => handleGenreToggle(genre)}
                            style={{
                                cursor: 'pointer',
                                padding: '8px',
                                border: '1px solid white',
                                borderRadius: '8px',
                                margin: '4px',
                                width: 'calc(20% - 8px)',
                                textAlign: 'center',
                                backgroundColor: selectedGenres.includes(genre) ? 'green' : 'transparent',
                                color: selectedGenres.includes(genre) ? 'white' : 'black'
                            }}
                        >
                            {genre}
                        </div>
                    ))}
                </Flex>
            </Center>
            <Button colorScheme="blue" size="md" onClick={handleSubmit}>
                Submit
            </Button>
        </>
    );
}

export default UserInput;