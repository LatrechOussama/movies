
import { useState } from 'react';
import AddMovie from './components/AddMovie';
import './App.css';
import MovieList from './components/MovieList';
import { moviesData } from './Data';
import Search from './components/Search';


function App() {
  
  const [list, setList] = useState(moviesData);
  const [text, setText] = useState('');
  const [rate, setRate] = useState('0');

  //delete movie 
  const handleDelete=(id)=>{
    setList(list.filter(el=>el.id!==id))
  }
  //add movie
  const handleAdd=(newMovie)=>{
    setList([...list,newMovie])
  }
  
  //text change
  const handleText=(x)=>{
    setText(x)
  }
  const handleRate=(s)=>{
    setRate(s)
  }
  //update 
  const handleEdit=(updteMovie)=>{
setList(list.map(el=>el.id===updteMovie.id?{...el,...updteMovie}:el))
  }
  
  
  
  return (
    <div className="App">
      
      <Search text={text} handleText={handleText} handleRate={handleRate} rate={rate}/>
   <MovieList editt={handleEdit} handleRate={handleRate} rate={rate} movies={list.filter(movie=>movie.name.toLowerCase().includes(text.toLowerCase())&&movie.rating>=rate)} delete={handleDelete}/>
   <br /><br />
   <div className='formmmmm'>
     <br />
     <br />
   <AddMovie add={handleAdd} /></div>
    </div>
  );
}

export default App;
