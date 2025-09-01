import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import axios from "axios"
function Login() {
const[mail,setmail]=useState('')
const[parol,setparol]=useState('')
const [errorMessages,setError]=useState([]);
const[loading,setLoading]=useState(false);
const [success,setSuccess]=useState('')

const navigate=useNavigate()

const handleSubmit= async (e) =>{
    e.preventDefault();
    setError(null);
    setLoading(true);
try {
    const response=await axios.post("https://localhost:44323/api/Auth/Login",{
istifadeciMaili:mail,
parol:parol

    });
const token=response.data;
localStorage.setItem("ad",response.data.ad)
localStorage.setItem("rol",response.data.rol)
console.log("Gelen cavab" + JSON.stringify(response.data, null, 2));

setSuccess("Giriş Uğurlu Oldu")
setTimeout(() => {
navigate("/")
    
}, 2000);
} catch (error) {
    if (error.response) {
        const data = error.response.data;

        if (data.errors) {
          const messages = Object.values(data.errors).flat().join("\n");
          setError(messages);
        } else {
          setError(typeof data === 'string' ? data : data.title || "Naməlum xəta baş verdi");
        }
      } else {
        setError("Serverə qoşulmaq mümkün olmadı");
      }

}
finally{
    setLoading(false);
}

    
}


  return (
     <div className='login-page'>
            <form  className="form"
            onSubmit={handleSubmit}
            
            >
                <p className="title">Login </p>
                <p className="message">Signup now and get full access to our app. </p>
                <label>
                    <input required="" placeholder="" type="email" 
                    onChange={(e)=>setmail(e.target.value)}
                    
                    value={mail} className="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" value={parol}
                    onChange={(e)=>setparol(e.target.value)}
                    className="input" />
                    <span>Parol</span>
                </label>
              
                <button className="submit">Login</button>
                {errorMessages && <p style={{ color: 'red', whiteSpace: 'pre-line' }}>{errorMessages}</p>}
              {success && <p style={{color: 'green'}}>{success}</p>}
                <p className="signin">Already have an acount ? <NavLink to="/register">Signup</NavLink> </p>
            </form>
        </div>
  )
}

export default Login
