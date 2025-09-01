import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
function Register() {

    const [form, setForm] = useState({
        IstifadeciMaili: '',
        Parol: '',
        Ad: '',
        Soyad: ''

    });
    const [errorMessages, setErrorMessages] = useState([])
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessages([]);
  setSuccess('');
  
  try {
    const response = await axios.post("https://localhost:44323/api/Auth/Register", form);
    setSuccess("Qeydiyyat uğurla tamamlandı");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  } catch (err) {
    if (err.response && err.response.data) {
  const data = err.response.data;

  if (data.errors) {
    // "errors" objectini array halına salırıq
    const allErrors = Object.values(data.errors).flat();
    setErrorMessages(allErrors);
  } else if (data.message) {
    setErrorMessages([data.message]);
  } else {
    setErrorMessages(["Naməlum xəta baş verdi"]);
  }
} else {
  setErrorMessages(["Serverə qoşulmaq mümkün olmadı"]);
}
  }
};



    return (
        <div className='login-page'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input required=""
                            placeholder=""
                            type="text"
                            onChange={handlechange}
                            name='Ad'
                            value={form.Ad}
                            className="input" />
                        <span>Ad</span>
                    </label>

                    <label>
                        <input required=""
                            placeholder=""
                            type="text"
                            name='Soyad'
                            onChange={handlechange}

                            value={form.Soyad}
                            className="input" />
                        <span>Soyad</span>
                    </label>
                </div>

                <label>
                    <input required=""
                        placeholder=""
                        type="email"
                        onChange={handlechange}

                        value={form.IstifadeciMaili}
                        name='IstifadeciMaili'
                        className="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required=""
                        placeholder=""
                        type="password"
                        onChange={handlechange}

                        name='Parol'
                        value={form.Parol}
                        className="input" />

                    <span>Parol</span>
                </label>

                {errorMessages.length > 0 && (
                    <ul style={{ color: 'red' }}>
                        {errorMessages.map((err, index) => (
                            <li key={index}>{err}</li>
                        ))}
                    </ul>
                )}

                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button className="submit">Register</button>
                <p className="signin">Do you have an acount ? <NavLink to="/login">Signin</NavLink> </p>
            </form>

        </div>
    )
}

export default Register
