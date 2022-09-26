import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import img1 from "../../../i.png";
import axios from "axios";


function AdminLogin() {

 const [data, setData] = useState({
       email: "", password:""
    });
   const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value});
    }


    const handleSubmit = async(e) => {

      e.preventDefault();

    try {
        const {data: res} = await axios.post(`https://ecommerceas.herokuapp.com/api/admin/signin`, 
        data);
        localStorage.setItem("admintoken", res.data);
			localStorage.setItem("adminusername", res.admin.username);
			localStorage.setItem("admin_id", res.admin._id)
        window.location.href="/admin/update";
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
           <h4 id="formh4">ADMIN LOGIN</h4>
          </div>
      <div className='col-lg-10'>
          <EmailIcon  id="font" />
      <input type="email" className='col-lg-10' id="input" placeholder='Email' name="email" onChange={handleChange}  value={data.email}  required/>
      </div>   
     <div className='col-lg-10'>
      <PasswordIcon id="font" />
      <input type="password" className='col-lg-10' id="input" placeholder='Password' name="password" onChange={handleChange} value={data.password} required/>
      </div>    

      {error && <p id="p">{error}</p>}
      <a href='/admin/forgot-password'>Forgot Password</a>
          <button type="submit" id="button">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default AdminLogin