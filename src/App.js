import { useState, useEffect } from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
import Movies from './components/Movies'; 
import SearchBar from './components/SearchBar';
import MovieForm from './components/MovieForm'; 

const App = () => {
  const MOVIES = [];
  const [showForm, setShowForm] = useState(false);
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState(MOVIES);

  const searchMe = (res) => {
    setMovies(MOVIES.filter(movie => movie.name.toLowerCase().indexOf(res.toLowerCase()) !== -1));  
  }

  const addMovie = (obj) => { 
  }
  const deleteMe = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  }
  const myFavorite = (id) => {
    setMovies(movies.map(movie => (movie.id === id)? {...movie, fav:!movie.fav}:movie));
  }

  return (
    <div className="App">
      <Header title="MovieCon" />
      <div className="container">    
        <SearchBar searchMe={searchMe} />
        {showForm && <MovieForm addMovie={addMovie} />}
        <Movies movies={movies} deleteMe={deleteMe} myFavorite={myFavorite} />
      </div>
      <Footer copyright="All rights are reserved Funtechstic.com"/>
    </div>
  );
}

export default App; 
