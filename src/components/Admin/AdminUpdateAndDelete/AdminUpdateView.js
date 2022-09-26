import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./AdminUpdate.css";
import axios from "axios";

function AdminUpdateView() {

    const {id} = useParams();

    const [post, setPosts] = useState([])    


    useEffect(() => {
      fetch(`https://ecommerceas.herokuapp.com/api/admins/get/${id}`)
      .then((res) => res.json())
      .then((asd) => setPosts(asd.Posts));
    }, [id]);


    console.log(post)

    const Delete = async() => {
        try {
            const elete = await axios.delete(`https://ecommerceas.herokuapp.com/api/admins/delete/${post._id}`)
            if(elete.status === 200){
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className='container'>
       <div className='row' id="posd">
         <div className='col-md-4' id="asdf">
                <img src={post.image} className="img-fluid" alt={post.name} />
         </div>
         <div className='col-lg-8'>
           <h5 id="hqw">{post.name}.</h5>
           <h5 id="hqw">Price: {post.price}/-</h5>
           <h5 id="hqw">Quantity: {post.qty}</h5>
           <h5 id="hqws">Description: {post.description}</h5>
           <div id="updatediv1">
           <button id="updateup" onClick={() => window.location.href=`/admin/admin/update/${post._id}`} >Update</button>
     <button id="updatedel" onClick={Delete}>Delete</button> 
           </div>
       </div>
    </div>
    </div>
  )
}

export default AdminUpdateView;