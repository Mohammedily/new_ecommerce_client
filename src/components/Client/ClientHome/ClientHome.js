import React, {useState, useEffect} from 'react';
import "./ClientHome.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function ClientHome() {

  const [apo, setAbo] = useState([]);

  useEffect(() => {
    fetch(`https://ecommerceas.herokuapp.com/api/product/router`)
    .then((res) => res.json())
    .then((asd) => setAbo(asd));
  }, [])

  console.log(apo);

  return (
    <div>
      <div className='div'>
        <img className="img-fluid" id="maindiv" src="https://res.cloudinary.com/adsadsdsdfs/image/upload/v1664121717/Add_a_heading_vqz4ny.png" alt="ilyas" />
      </div>
      <div className='container'>
        <h2 id="poph2">Popular Products</h2>
        <div className='row'>
        {
          apo.map((apos) => (
           <div className='col-md-4'>
             <div class="card" id="asdsz">
  <img src={apos.image} class="card-img-top" id="img-top" alt={apos.name} />
  <div class="card-body">
    <h4 id="cardh4">{apos.name.slice(0, 20)}...</h4>
    <div id="carddiv1">
    <h4 id="cardh4">$ {apos.price}/-</h4>
    <button id="cardbutton" onClick={() => window.location.href=`/client/product/${apos._id}`}><ShoppingBagIcon id="cardicon" /></button>
    </div>
   
  </div>
</div>
           </div>
          ))
        }
        </div>
        
        
      </div>

    </div>
  )
}

export default ClientHome;


