import React from 'react';
import StarRating from './StarRating';

const Search = ({text,handleText,handleRate,rate}) => {
  return <div>

      <form  className='formmmmm'>
     
          <input type="text" onChange={(e)=>handleText(e.target.value)} value={text} style={{width:'20%' , marginTop:'20px' , borderRadius:'10px'}} placeholder="Search a Movie By Name" />
          <StarRating handleRating={handleRate} rating={rate}/>
      </form>
  </div>;
};

export default Search;
