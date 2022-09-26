import React, {useState} from 'react';
import "./AdminPost.css";
import axios from "axios";


function AdminPost() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState();
  const [totalqty, setTotalQty] = useState();

  const AdminPost = async(e) => {
    e.preventDefault();

    try {
      const post = await axios.post("https://ecommerceas.herokuapp.com/api/admins/post", {
        name, image, price, description, category, qty, totalqty, AdminId: localStorage.getItem("admin_id")
      })
      if(post.status === 200){ window.location.href="/admin/update" }
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className='container'>
        <div className='post' id="post">
            <form className='col-lg-8 col-sm-6' id="postform" onSubmit={AdminPost}>
               <h4 id="h4" className='col-lg-8 col-sm-4'>Product Post</h4>
               <input type="text" className='col-lg-8 col-sm-4' id="inputpost" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Title" />
               <input type="text" className='col-lg-8 col-sm-4' id="inputpost" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Image Url" />
               <input type="number" className='col-lg-8 col-sm-4' id="inputpost" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
               <select className='col-lg-8 col-sm-4' id="inputpost" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option></option>
                <option>Chair</option>
                <option>Table</option>
                <option>Sofa</option>
               </select>
               <input type="text" className='col-lg-8 col-sm-4' id="inputpost" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description"  />
               <input type="number" className='col-lg-8 col-sm-4' id="inputpost" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Enter Qunatity" />
               <input type="number" className='col-lg-8 col-sm-4' id="inputpost" value={totalqty} onChange={(e) => setTotalQty(e.target.value)} placeholder="Enter Total Quantity" />
               <button type='submit' id="submitbutton">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AdminPost