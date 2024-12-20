# Movie Recommendation System
I have taken the backend of this project from another project which I was involved in. The project can be found [here](https://github.com/Azmart/Recommendation). This was a university project I was a part of with 2 other people. I was responsible for creating the movie recommendation system itself. I created most of the functions in the backend and my peers were responsible for making the frontend along with the connection between it and the backend.

I have chosen to revisit this project because I am eager to handle it independently this time.

# The Recommender System
Since the user has not rated any movies, the systems makes the user pick 3-6 genres. This is known as the cold start problem.
![Genre Selection](/img/input.png "Genre Selection")

The user is redirected to a page where 5 movies are presented based on the selected genres. The system begins to learn the user's preferences to some extent after the user rates the 5 movies.
![Cold Start](/img/cold-start.png "Cold Start")

In the final recommendation, movies are selected using a hybrid filtering approach that combines content-based and collaborative filtering. This hybrid method allocates 20% to content-based filtering and 80% to collaborative filtering
![Hybrid Filtering](/img/hybrid-filtering.png "Hybrid Filtering")

## Collaborative Filtering (Model-Based):
Utilizing a model-based approach, collaborative filtering leverages Singular Value Decomposition (SVD) to derive recommendations. By applying machine learning techniques, particularly deep learning methods, the system learns latent factors from user-movie interactions. These latent factors capture intricate patterns and preferences from the user-item interactions, enabling the system to make personalized recommendations based on these learned factors.

## Content-Based Filtering (Machine Learning Approach):
In contrast, the content-based filtering method also adopts a machine learning framework to analyze user preferences. By examining the movies users enjoy, this approach identifies similarities between movies. The system calculates the cosine similarity between movies, enabling it to recommend films that are akin to those already liked by the user. This method enhances personalization by suggesting movies with similar attributes or themes, aligning closely with the user's tastes.

By combining both collaborative filtering and content-based filtering techniques, the recommendation system provides a comprehensive and tailored movie recommendation experience for users.

### Improvements to be made
1. Incorporating Real-Time Updates:
- Implement functionality to update the recommendation system whenever a user rates a movie.
- Ensure that the system reads and incorporates the updated list of user ratings to provide more personalized  and accurate recommendations.
2. Enhancing UI/UX Design:
- Improve the user interface and experience by enhancing the design aesthetics and usability.
- Maintain a user-friendly layout while introducing interactive elements for a more engaging experience.
- Prioritize functionality before refining the visual aspects to ensure the core system is robust and effective.
3. Enhancing Recommendation Algorithm:
- Develop the recommendation algorithm to provide more accurate and personalized suggestions.
- Allow users to specify their preferences more precisely, possibly through genres, actors, directors, or specific themes.
- Incorporate advanced recommendation techniques such as collaborative filtering with matrix factorization, deep learning models, or hybrid approaches to enhance the accuracy of suggestions.

### Personal Note
1. ./recom_sys/Scripts/activate
2. flask run --reload