
import React,{ useEffect, useState } from "react";

function App2() {
  let a=10;


  return (

   <h2>{a%2==0?"even":"odd"}</h2>
   
  );
}
export default App2;




/*import React from 'react';
import './App2.css';

class App2 extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return <h2>It is {this.state?.date?.toLocaleTimeString()}.</h2>;
  }
}

export default App2;*/






/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App2.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id} onClick={() => handleMovieClick(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h1>{selectedMovie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <p>{selectedMovie.overview}</p>
            <h3>Release Date: {selectedMovie.release_date}</h3>
            <h3>Rating: {selectedMovie.vote_average}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;*/
