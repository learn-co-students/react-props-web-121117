// Code goes here
class MovieCard extends React.Component {
  render(){
    return (
      <div className="movie-card">
        <img
          src={this.prop.poster}
          alt={this.prop.title}
        />
        <h2>{this.prop.title}</h2>
        <small>Genres: {this.prop.genres.join(', ')}</small>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster="http://image.tmdb.org/img.jpg"
    genres={jurassicWorldGenres}
  />,
document.getElementById('root')
);
