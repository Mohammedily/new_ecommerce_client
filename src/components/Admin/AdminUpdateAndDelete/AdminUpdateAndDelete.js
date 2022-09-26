import React, {useEffect, useState} from 'react';
import "./AdminUpdate.css"



function AdminUpdateAndDelete() {

    const [post, setPost] = useState([]);
 
    useEffect(() => {
        fetch(`https://ecommerceas.herokuapp.com/api/admins/get/post`)
        .then((res) => res.json())
        .then((pos) => setPost(pos.posts));
    },[]);



  return (
    <div className='container'>
    <div className="row">
        {
            post.map((posts) => (
                <Update key={posts} posts={posts} />
            ))
        }
        
        </div>
   
   </div>
  )
}

export default AdminUpdateAndDelete;


function Update({posts}){
    


    return(
    <div className='col-sm-4 ' id="col">
    <div class="card ">
  <img src={posts.image} class="card-img-top" alt={posts.title} style={{ height: "270px", padding: "20px" }} />
  <div class="card-body" id="card-body">
    <h6  id="updateh6">{posts.name.slice(0,20)}...</h6>
    <div id="updatediv">
     <button id="updateup" onClick={() => window.location.href=`/admin/update/${posts._id}`}>View</button>
    </div>
  </div>
</div>
    </div>
    );
}

