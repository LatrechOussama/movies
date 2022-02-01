import React from 'react';

const StarRating = ({rating,handleRating}) => {
    const stars=(rating)=>{
        var tab=[]
        for (let i=1;i<=5;i++){
            i<=rating?tab.push(<span onClick={()=>handleRating(i)} style={{color:'gold', fontSize:'30px' , cursor:'pointer'}}>★</span>):tab.push(<span onClick={()=>handleRating(i)} style={{color:'gold', fontSize:'30px' , cursor:'pointer'}}>☆</span>)
        }
        return tab
    }
  return <div>

{stars(rating)}
  </div>;
};

StarRating.defaultProps={
  handleRating:()=>{}
}
export default StarRating;
