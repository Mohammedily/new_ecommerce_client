import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./ClientOrder.css";

function ClientOrderDetial() {

    
    
  const [api, setApi] = useState([]);
  const [data , setData] = useState([]);

const {id} = useParams();

  useEffect(() => {
      fetch(`https://ecommerceas.herokuapp.com/api/order/get/${id}`)
      .then((res) => res.json())
      .then((asd) => setApi(asd));
  }, [id]);

  useEffect(() => {
      fetch(`https://ecommerceas.herokuapp.com/api/order/get/${id}`)
      .then((res) => res.json())
      .then((asd) => setData(asd.item));
  }, [id]);

console.log(api)
console.log(data)

return (
  <div>
      <button id="orderback" onClick={() => window.location.href=`/client/order`}>Back</button>
          <div className='container' id="xsd">
              <div className='row'>
                 <div className='col-md-8'>
                    {
                      data.map((datas) => (
                          <div>
                              <h1 id="orderh3">Product Detial:-</h1><br/>
<h3 id="orderh3">{datas.title}</h3>
                          <h3 id="orderh3">$ {datas.price}/-</h3>
                          <h3 id="orderh3">Quantity: {datas.quantity}</h3>
                          </div>
                         
                      ))
                    }
                 </div>
                 <div className='col-md-4'>
                 <div>
                              <h1 id="orderh3">Address Detial:-</h1><br/>
<h3 id="orderh3">Username: {api.username}.</h3>
                          <h3 id="orderh3">Total Amount: {api.totalamount}/-</h3>
                          <h3 id="orderh3">Date: {api.Date}</h3>
                          <h3 id="orderh3">Address: {api.address}.</h3>
                          <h3 id="orderh3">City: {api.city}.</h3>
                          <h3 id="orderh3">Country: {api.country}.</h3>
                          <h3 id="orderh3">Postal Code: {api.postalCode}.</h3>
                          </div>
                 </div>
              </div>
          </div>
  </div>
)
}

export default ClientOrderDetial;