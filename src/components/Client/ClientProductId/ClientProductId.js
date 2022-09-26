import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./ClientProductId.css";


function ClientProductId() {

    const {id} = useParams();

    const [api, setApi] = useState([]);

    useEffect(() => {
     fetch(`https://ecommerceas.herokuapp.com/api/product/${id}`)
     .then((res) => res.json())
     .then((asd) => setApi(asd));
    },[id])
   console.log(api)

   const Cart = async() => {
    

    try {
        
        const cartpost = await axios.post(`https://ecommerceas.herokuapp.com/api/cart/post`, {
            _id: api._id,
            name: api.name,
         price: api.price,
         image: api.image, 
         category: api.category,
         description: api.description,
         quantity: 1,
         AdminId: api.AdminId,
         clientId: localStorage.getItem("client_id"),
         username: localStorage.getItem("clientusername")
        })
   
        if(cartpost.status === 200){
            window.location.href=`/client/cart`;
        }

    } catch (error) {
        console.log(error);
    }

   }

  return (
    <div>
        <div>
            <button id="backbutton" onClick={() => window.location.href="/client/product"}>Back</button>
        </div>
        <div className='container' id="idcont">
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='img-fluid' id="imgs" src={api.image} alt={api.name} />
                </div>
                <div className='col-lg-8'>
                <h3 id="idh3">{api.name}.</h3>
                <h3 id="idh3">$ {api.price}/-</h3>
                <p id="idp">Description: {api.description}</p>
                <button id="cartbutton" onClick={Cart}>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientProductId;