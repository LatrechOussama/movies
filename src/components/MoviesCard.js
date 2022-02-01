import React from "react";
import Edit from "./Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import StarRating from "./StarRating";

const MoviesCard = (props) => {

  return (
    <div
      className="card1"
      // style={{
      //   border: "2px solid white",
      // }}
    >
      <h2>{props.item.name}</h2>
     <div className="container">
      <img src={props.item.image} alt="" className="ima"/>
      <DeleteIcon  onClick={() => props.delete(props.item.id)} className="iconn"/>
      <Edit item={props.item} editt={props.editt} />
      </div>
      <StarRating rating={props.item.rating} />
      <hr />
      <h2>{props.item.date}</h2>
      {/* <hr /> */}
      {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
        {/* <button
          className="button-12"
          onClick={() => props.delete(props.item.id)}
        >
          <h3 className="del">Delete</h3>{" "}
        </button> */}
       
       
       
       
        
      {/* </div> */}
    </div>
  );
};

export default MoviesCard;
