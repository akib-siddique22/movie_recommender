from app import app, db
from flask import request, jsonify
from models import Movies

#Get all movies
@app.route('/api/movies', methods=["GET"])
def get_movies():
    movies = Movies.query.all()
    result = [movie.to_json() for movie in movies]
    return jsonify(result)