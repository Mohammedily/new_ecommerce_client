import React, {useState} from 'react';
import axios from "axios";

function ClientForgotPassword() {
    const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://ecommerceas.herokuapp.com/api/user/password-reset`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

  return (
    <div className='container'>
       <div id="adminforgot">
          <form id="formforgot" className='col-lg-8' onSubmit={handleSubmit}>
            <h5 id="asdfa">Forgot Password</h5>
            <input type="text" className='col-lg-8' id="input" placeholder='Enter Email' name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email} required/>

           {error && <p id="p">{error}</p> }
           {msg && <p id="msgp">{msg}</p>}
            <button id="formbuttonforgot"> Submit </button>
          </form>
       </div>
    </div>
  )
}

export default ClientForgotPassword