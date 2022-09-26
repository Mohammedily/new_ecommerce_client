import React from 'react';
import img1 from "../../../i.png";
import "./ClientNavbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function ClientNavbar() {
  return (
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={img1} alt="" id="imgnav" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar"><MenuIcon id="id" /></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link" id="nav-link" href="/client/home">Home</a>
        <a class="nav-link" id="nav-link" href="/client/product">Products</a>
        <a class="nav-link"id="nav-link" href="/client/cart">Cart</a>
        <a class="nav-link"id="nav-link" href="/client/order">Order</a>
        <a class="nav-link"id="nav-link" href="/client/profile">Profile</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default ClientNavbar;