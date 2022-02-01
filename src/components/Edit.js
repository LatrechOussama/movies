import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useState } from 'react/cjs/react.development';
import StarRating from './StarRating';
import EditIcon from '@mui/icons-material/Edit';

const Edit = ({item,editt,handleRate,rate}) => {

const [name, setName] = useState(item.name);
const [image, setImage] = useState(item.image);
const [rating, setRating] = useState(item.rating)
const [date, setDate] = useState(item.date);



//submit
const handleSubmit=(e)=>
{e.preventDefault()
    const editTask={
        id:item.id,
        name:name,
        image:image,
        rating:rating,
        date:date,
    }

editt(editTask);

closeModal();


}


const handleRating = (x) => {
  setRating(x);
};







    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);
      Modal.setAppElement("#root");
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
  return <div>
      {/* <button className="button-12">
          <h3 className="del" onClick={openModal}>
            Edit
          </h3>
        </button> */}
        <EditIcon  onClick={openModal} className="iconn2" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form className="formadd" onSubmit={handleSubmit} >



          <div className="formcontents" >

          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <StarRating rating={rating} handleRating={handleRating}  />
      <hr />
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>


</div>
    <div className="btn">
            <button  className="button-12" type='submit'  >
              <h3>Confirm</h3>

            </button>
            <button className="button-12" onClick={closeModal}>
              <h3>Cancel</h3>
            </button>
          </div>    
          </form>
        </Modal>
  </div>;
};

export default Edit;
