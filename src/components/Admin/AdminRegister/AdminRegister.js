import React, { useState } from 'react';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import img1 from "../../../i.png";
import "./AdminRegister.css";
import axios from "axios";



function AdminRegister() {

    const [data, setData] = useState({
      username: "", email: "", password:""
    });
   const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }


    const handleSubmit = async(e) => {

      e.preventDefault();

    try {
        const post = await axios.post(`https://ecommerceas.herokuapp.com/api/admin/signup`, 
        data);
        window.location.href="/admin/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    }


  return (
    <div className='container'>
    <div id="cont">
      <form className='col-lg-6 text-center' id="form" onSubmit={handleSubmit}>
          <div className='col-lg-10' id="ico">
           <img src={img1} alt=""  className='img-fluid' id="img1" />
           <h4 id="formh4">ADMIN REGISTER</h4>
          </div>
     <div className='col-lg-10'>
      <PermContactCalendarIcon id="font" />
     <input type="text"   className='col-lg-10' id="input" placeholder='Name' name="username" onChange={handleChange} value={data.username} required/>
      </div>   
      <div className='col-lg-10'>
          <EmailIcon  id="font" />
      <input type="email" className='col-lg-10' id="input" placeholder='Email' name="email" onChange={handleChange}  value={data.email}  required/>
      </div>   
     <div className='col-lg-10'>
      <PasswordIcon id="font" />
      <input type="password" className='col-lg-10' id="input" placeholder='Password' name="password" onChange={handleChange} value={data.password} required/>
      </div>    

      {error && <p id="p">{error}</p> }

          <button type="submit" id="button">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default AdminRegister