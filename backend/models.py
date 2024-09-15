from app import db

class Movie(db.Model):
    MovieID = db.Column(db.Integer, primary_key = True)
    Titles = db.Column(db.String(100), nullable = False)
    Genres = db.Column(db.String(100),nullable = False)
    tmdbID = db.Column(db.Integer)

    def to_json(self):
        return {
            "MovieID": self.MovieID,
            "Titles": self.Titles,
            "Genres": self.Genres,
            "tmdbID": self.tmdbID,
        }