import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import "./AdminUpdate.css";
import axios from "axios";


function AdminUpdate() {

    const [totalqty, setTotalQty] = useState();

    const {id} = useParams();

    const Update = async(e) => {
        e.preventDefault();

        try {
            const update = await axios.patch(`https://ecommerceas.herokuapp.com/api/admins/update/${id}`, {totalqty})
          if(update.status === 200){
            window.location.href="/admin/update"
          }
        } catch (error) {
            console.log(error);
        }

    }
 
  return (
    <div className='container'>
     <form id="updatedivs" onSubmit={Update}>
   
      <h4 id="updateh4">Product Update</h4>
       <input type="number" className='col-md-4' value={totalqty} onChange={(e) => setTotalQty(e.target.value)} placeholder='Enter Quantity' id="input" />
       <button type="submit" id="sbutton">Submit</button>
     </form>
    </div>
  )
}

export default AdminUpdate;