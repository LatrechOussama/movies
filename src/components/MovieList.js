import React from 'react';
import MoviesCard from './MoviesCard';


const MovieList = (props) => {
  return <div className='movieslist'>

{
props.movies.map((movies,i)=>(<MoviesCard key={i} item={movies} delete={props.delete} editt={props.editt} handleRate={props.handleRate} rate={props.rate}/>))

}

  </div>;
};

export default MovieList;
