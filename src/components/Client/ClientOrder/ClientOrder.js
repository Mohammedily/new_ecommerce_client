import React, {useState, useEffect} from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function ClientOrder() {

    const [api, setApi] = useState([]);
    
    const username = localStorage.getItem("clientusername");

    useEffect(() => {
        fetch(`https://ecommerceas.herokuapp.com/api/order/get?username=${username}`)
       .then((res) => res.json())
       .then((asd) => setApi(asd));
    },[]);

    console.log(api);

  return (
    <div>
        {api ? (
            <div className='container'>
                <div id="head">
                    <h2 id="carth2">Order</h2>
                </div>
                <div className='row' id="asdazx">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Total Price</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    {
        api.map((apps) => (
          <tr>
          <td><h5 id="carth5">{apps.username}</h5></td>
          <td><h5 id="carth5">{apps.email}</h5></td>
          <td><h5 id="carth51">$ {apps.totalamount}/-</h5></td>
          <td><button id="remicon" onClick={() => window.location.href=`/client/order/detial/${apps._id}` }><RemoveRedEyeIcon id="rem" /></button></td>
        </tr>
        ))
    }
  </tbody>
</table>
               
                 
                </div>
            </div>
        ) : (
            <h4> Order Is Empty </h4>
        ) }
    </div>
  )
}

export default ClientOrder;