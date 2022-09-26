import React, {useState, useEffect} from 'react';
import "./AdminNavbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import img1 from "../../../i.png";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

function AdminNavbar() {

   const id = localStorage.getItem("admin_id");

  const [avatar, setAvatar] = useState([]);




  useEffect(() => {
    fetch(`https://ecommerceas.herokuapp.com/api/admin/get/${id}`)
    .then(res => res.json())
    .then((asd) => setAvatar(asd.Admins)); 
  }, [id])

 

  localStorage.setItem("username", avatar.username);

  const name = localStorage.getItem("username");


  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("admin_id");
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminusername");
    window.location.href="/admin/login";
  }

  return (
    <nav class="navbar navbar fixed-top" >
    <div class="container-fluid">
      <button class="navbar-toggler" id="tog" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar"><MenuIcon id="menu" /></span>
      </button>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
        <div class="offcanvas-header" id="off">
          <h6 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={img1} alt=""  className='img-fluid' id="img1" /></h6>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" id="togs" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <div id="adminlogo">
            <Stack>
      <Avatar  id="Avatar">{name.slice(0,1)}</Avatar>
    </Stack>
    <h5 id="username">{avatar.username}</h5>
    <h5 id="email">{avatar.email}</h5>
            </div>
          <li class="nav-item">
              <a class="nav-link" id="nav_link" href="/admin/update">UPDATE AND DELETE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav_link" href="/admin/post">PRODUCT POST</a>
            </li>
         
            <li class="nav-item">
              <a class="nav-link" id="nav_link" href="/admin/order">ORDER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav_link"><button id="logoutbutton" onClick={logout}>LOGOUT</button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default AdminNavbar;