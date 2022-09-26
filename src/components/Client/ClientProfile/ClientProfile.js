import React, {useState, useEffect} from 'react';
import "./ClientProfile.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';


function ClientProfile() {

    const [user, setUser] = useState([]);

    const id = localStorage.getItem("client_id"); 

    useEffect(() => {
      fetch(`https://ecommerceas.herokuapp.com/api/user/user/${id}`)
      .then((res) => res.json())
      .then((asd) => setUser(asd.user))
    },[id]);

    console.log(user)

    const username = localStorage.getItem("clientusername");

  const forgot = () => {
     localStorage.removeItem("client_id")
     localStorage.removeItem("clientusername")
     localStorage.removeItem("clientemail")
     localStorage.removeItem("clienttoken")
     window.location.href="/"
  }

  return (
    <div className='container' id="pro">
<div class="card" id="as">
<Stack direction="row">
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
        id='asas'
      >
        {username.slice(0,1)}
      </Avatar>
    </Stack>
  <div class="card-body" id="azc">
    <h2 class="card-title" id="orderh3a">User Id: {user._id}</h2>
    <h2 class="card-title" id="orderh3a">Username: {user.username}.</h2>
    <h2 class="card-title" id="orderh3a">Email: {user.email}</h2>
    <button id="buttonlogouts" onClick={forgot}>Logout</button>
  </div>
</div>
    </div>
  )
}

export default ClientProfile;