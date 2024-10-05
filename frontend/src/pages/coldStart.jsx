import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Text, Icon } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function ColdStart() {
    const [recommendations, setRecommendations] = useState([]);
    const [ratings, setRatings] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/top5-recommendations')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch recommendations');
                }
                return response.json();
            })
            .then(data => {
                setRecommendations(data.top5_movies);
                const initialRatings = {};
                data.top5_movies.forEach(movie => {
                    initialRatings[movie.MovieID] = 0;
                });
                setRatings(initialRatings);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); 

    const handleRatingChange = (movieID, rating) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [movieID]: rating,
        }));
    };

    const handleSubmitFeedback = () => {
        fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ratings),
        })
        .then(response => {
            if (response.ok) {
                console.log('Ratings sent successfully');
                window.location.href = '/movies/hybrid-filtering';
            }else{
                throw new Error('Failed to submit feedback');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const StarRating = ({ movieID }) => {
        const stars = Array.from({ length: 5 }, (_, index) => index + 1);

        return (
            <Flex>
                {stars.map(star => (
                    <Icon
                        key={star}
                        as={ratings[movieID] >= star ? AiFillStar : AiOutlineStar}
                        color={ratings[movieID] >= star ? 'yellow.500' : 'gray.300'}
                        onClick={() => handleRatingChange(movieID, star)}
                        cursor="pointer"
                    />
                ))}
            </Flex>
        );
    };

    return (
        <Flex justify="center" align="center" h="100vh">
            <Box maxW="600px" p="4">
                <Text fontSize="xl" mb={4}>Top 5 Recommendations</Text>
                {recommendations.map(recommendation => (
                    <Box key={recommendation.MovieID} mb={4}>
                        <Text>{recommendation.Title}</Text>
                        <StarRating movieID={recommendation.MovieID} />
                    </Box>
                ))}
                <Button onClick={handleSubmitFeedback}>Submit Feedback</Button>
            </Box>
        </Flex>
    );
}

export default ColdStart;