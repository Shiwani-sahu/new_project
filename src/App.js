import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import searchIcon from './search.svg';
import './App.css';
const API_URL = 'https://www.omdbapi.com?apikey=2d4f805a';

const movie1 = {
    
        "Title": "Spiderman in Cannes",
        "Year": "2016",
        "imdbID": "tt5978586",
        "Type": "movie",
        "Poster": "N/A"
    

}
const App = () => {
    const [movies , setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');
    
    const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    }

    useEffect (() => {
        searchMovies('Spiderman');
    } , []);
    return (
        <div className ="app">
            <h1>Entertainment</h1>
            <div className = "search">
                <input
                placeholder ="Search for movies"
                value = {searchTerm}
                onChange= {(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                src ={searchIcon}
                alt = "search"
                onClick ={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className= "container">
                {movies.map((movie) =>(
              <MovieCard movie ={ movie} />


                ) )}
        </div>

                ) : (
                
    <div className = "empty">
        <h2>No Movies Found </h2>
        </div>
                )
            }
            
        </div>
    );
        }

export default App;