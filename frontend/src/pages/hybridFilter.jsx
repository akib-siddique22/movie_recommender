import React, { useState, useEffect } from 'react';

const HybridFilter = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/final-recommendations');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecommendations(data.final_recommendations);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Final Recommendations</h1>
            <ul>
                {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HybridFilter;