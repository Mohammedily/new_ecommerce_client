import React, {useState} from 'react';
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';

function ClientQuantity({apps}) {


    const [elete, setElete] = useState([]);

    function refreshPage() {
        window.location.reload(false);
      }

 
    const updateCart = ({ product, action }) => {
    
    
    
        fetch(`https://ecommerceas.herokuapp.com/api/cart/qty/${apps._id}/?type=${action}`, {method: "PUT", body:JSON.stringify(product),
        headers:{
          "Content-Type":"application/json",
        },
      })
        .then((data) => data.json())
        .then((latestCart) => setElete(latestCart));
        refreshPage();
      }

      const CartDelete = async() => {
        try {
            const del = await axios.delete(`https://ecommerceas.herokuapp.com/api/cart/delete/${apps._id}`) ;
            alert("Deleted Successfully")
            window.location.href=`/client/product`; 
        } catch (error) {
            console.log(error);
        }
        
    }

console.log(apps);

  return (
    <tr>
    <th scope="row"><img src={apps.image} className="img-fluid" id="cartimg" alt={apps.name} /></th>
    <td><h5 id="carth5">{apps.name}</h5></td>
    <td><h5 id="carth51">$ {apps.price}/-</h5></td>
    <td> <button id="qtybtn" onClick={() => updateCart({apps, action: 'increment'  })}>+</button> {apps.quantity} <button id="qtybtn" onClick={ () => updateCart({apps, action: 'decrement'  }) }>-</button>  </td>
    <td><button id="del" onClick={CartDelete}><ClearIcon id="delico" /></button></td> 
  </tr>
  )
}

export default ClientQuantity