import React, {useState, useEffect} from 'react';
import axios from "axios";


function ClientAddressForm() {

        const [address, setAddress] = useState("");
        const [country, setCountry] = useState("");
        const [city, setCity] = useState("");
        const [postalCode, setPostalCode] = useState();

        const [cart, setApp] = useState([]);

        const username = localStorage.getItem("clientusername");
        
        
            useEffect(() => {
              fetch(`https://ecommerceas.herokuapp.com/api/cart/get?username=${username}`)
              .then((res) => res.json())
              .then((asd) => setApp(asd));
            },[username]);
        
        
            const arr = new Array();

            for(let i=0; i< cart.length; i++){
              
              var item ={
                _id: cart[i]._id,
                title: cart[i].name,
                price: cart[i].price,
                image: cart[i].image,
                quantity: cart[i].quantity,
                category: cart[i].category,
                AdminId: cart[i].AdminId,
              }
             arr.push(item);
            }

            console.log(arr);

            const total = cart.map(item => item.quantity  * item.price ).reduce((sum, item ) => sum + item,0)

        const Order = async(e) => {
            e.preventDefault();

            try {
                const ord  = await axios.post(`https://ecommerceas.herokuapp.com/api/order/post`, {
                   email: localStorage.getItem("clientemail"),  username: localStorage.getItem("clientusername"),
                   totalamount: total,  address, city, country, postalCode, item, clientId: localStorage.getItem("client_id") 
                })
                if(ord.status === 200){
                    window.location.href="/client/order";
                }
            } catch (error) {
                console.log(error);
            }

        }

  return (
    <div>
        <div id="adddiv1">
          <form className='col-lg-8' id="addform" onSubmit={Order}>
            <h3 id="addh3">ADDRESS FORM</h3>
            <input  type="text" id='input' className='col-lg-6 s' value={address} onChange={(e) => setAddress(e.target.value) } placeholder='Enter Address'  required/>
            <input type="text" id='input' className='col-lg-6 s' value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter City'  required/>
            <input  type="text" id='input' className='col-lg-6 s' value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Enter Country'  required/>
            <input type="number" id='input' className='col-lg-6 s' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder='Enter Postal Code'  required/>
              <button type='submit' id="addbtn">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ClientAddressForm;