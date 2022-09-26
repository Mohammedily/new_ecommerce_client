import React, {useState, useEffect} from 'react';
import "./Clientcart.css";
import ClientQuantity from './ClientQuantity';


function ClientCart() {

    const [app, setApp] = useState([]);

const username = localStorage.getItem("clientusername");


    useEffect(() => {
      fetch(`https://ecommerceas.herokuapp.com/api/cart/get?username=${username}`)
      .then((res) => res.json())
      .then((asd) => setApp(asd));
    },[username]);

    console.log(app);

    const total = app.map(item => item.quantity  * item.price ).reduce((sum, item ) => sum + item,0)

  return (
    <div>
        {app ? (
            <div className='container'>
                <div id="head">
                    <h2 id="carth2">Cart</h2>
                </div>
                <div className='row' id="asdazx">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    {
        app.map((apps) => (
          <ClientQuantity key={apps._id} apps={apps} />
        ))
    }
  </tbody>
</table>
                <div id="totaldiv">
                <h3 id="total">Total: <span>{total}</span>/-</h3>
                 <button id="checkout" onClick={() => window.location.href=`/client/order/form`}>CheckOut</button>
                </div>
                 
                </div>
            </div>
        ) : (
            <h4> Cart Is Empty </h4>
        ) }
    </div>
  )
}

export default ClientCart;