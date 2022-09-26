import React, {useState, useEffect} from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function ClientProducts() {

    const [api, setApi] = useState([]);

    useEffect(() => {
       fetch(`https://ecommerceas.herokuapp.com/api/product/all`)
       .then((res) => res.json())
       .then((asd) => setApi(asd));
    },[])


  return (
    <div className='container'><div className='row'>
    {
      api.map((apos) => (
       <div className='col-md-4'>
         <div class="card" id="asdsz">
<img src={apos.image} class="card-img-top" id="img-top" alt={apos.name} />
<div class="card-body">
<h4 id="cardh4">{apos.name.slice(0, 20)}...</h4>
<div id="carddiv1">
<h4 id="cardh4">$ {apos.price}/-</h4>
<button id="cardbutton" onClick={() => window.location.href=`/client/product/${apos._id}` } ><ShoppingBagIcon id="cardicon" /></button>
</div>

</div>
</div>
       </div>
      ))
    }
    </div></div>
  )
}

export default ClientProducts;