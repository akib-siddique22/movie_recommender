from app import app, db
from flask import request, jsonify
from models import Movie

#Get all movies
@app.route('/api/movies', methods=["GET"])
def get_movies():
    movies = Movie.query.all()
    result = [movie.to_json() for movie in movies]
    return jsonify(result)

@app.route("/api/movies", methods = ["POST"])
def create_movies():
    try:
        data = request.json
        
        MovieID = data.get("MovieID")
        Title = data.get("Title")
        Genres = data.get("Genres")
        tmdbID = data.get("tmdbID")

        new_movie = Movie(MovieID=MovieID, Title=Title, Genres=Genres, tmdbID=tmdbID)

        db.session.add(new_movie)
        
        db.session.commit()

        return jsonify({"msg":"Movie created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
