from app import app, db
from flask import request, jsonify
from models import Movie

#Get all movies
@app.route('/api/movies', methods=["GET"])
def get_movies():
    movies = Movie.query.all()
    result = [movie.to_json() for movie in movies]
    return jsonify(result)

#Add a movie
@app.route("/api/movies", methods = ["POST"])
def create_movies():
    try:
        data = request.json

        required_fields = ["MovieID", "Title", "Genres", "tmdbID"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
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

#Delete a movie
@app.route("/api/movies/<int:id>", methods=["DELETE"])
def delete_movie(id):
    try:
        movie = Movie.query.get(id)
        if movie is None:
            return jsonify({"error":"Movie not found"}), 404
        
        db.session.delete(movie)
        db.session.commit()
        return jsonify({"msg": "Movie deleted"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500