import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
function Pasientform() {
    const [errorMessages, setErrorMessages] = useState([])
    const [success, setSuccess] = useState('')
const [user,setUser]=useState(null)
const navigate = useNavigate();

useEffect(() => {
axios.get("https://localhost:44323/api/Pasient")
.then(response =>{
    setUser(response.data);
})
},[])


    const [form, setForm] = useState({
        email: "",
        aldigiDermanlar: "",
        allergiyalar: "",
        boy: "",
        ceki: "",
        cins: "",
        dogumTarixi: "",
        elaqesi: "",
        email: "",
        qanQrupuId: "",
        seher: "",
        soyad: "",
        tamAd: "",
        teciliElaqeAdi: "",
        teciliElaqeNomresi: "",
        telefon: "",
        unvan: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://localhost:44323/api/Pasient/add-pasiyent", form);
            setSuccess("Pasient uğurla qeydiyyatdan keçdi");
            setTimeout(() => {
                navigate("/pasientler");
            }, 2000);
            
        } catch (error) {
             setErrorMessages([error.response?.data || error.message]);
        }
    };
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleReset = () => {
        setForm({
            email: "",
            aldigiDermanlar: "",
            allergiyalar: "",
            boy: "",
            ceki: "",
            cins: "",
            dogumTarixi: "",
            elaqesi: "",
            email: "",
            qanQrupuId: "",
            seher: "",
            soyad: "",
            tamAd: "",
            teciliElaqeAdi: "",
            teciliElaqeNomresi: "",
            telefon: "",
            unvan: "",
            yas: ""
        });
    }

    return (
        

        
        <div className='pasient-form'>
        

            <div className="headpasient">
                <div className="up">
                    <i className="fa-regular fa-id-card"></i>
                    <h1>Pasient Qeydiyyatı</h1>
                </div>
                <div className="down">
                    <p>Yeni pasient məlumatlarını daxil edin</p>
                </div>
            </div>
            <div className="inputform">
                <form id="patientForm" className="patient-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3><i className="fas fa-user"></i> Şəxsi Məlumatlar</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Ad *</label>
                                <input type="text" id="firstName" onChange={handleChange} value={form.tamAd} name="tamAd" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Soyad *</label>
                                <input type="text" id="lastName" onChange={handleChange} value={form.soyad} name="soyad" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="birthDate">Doğum Tarixi *</label>
                                <input type="date" id="birthDate" onChange={handleChange} value={form.dogumTarixi} name="dogumTarixi" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Cins *</label>
                                <select id="gender" onChange={handleChange} value={form.cins} name="cins" required>
                                    <option value="">Seçin</option>
                                    <option value="Kisi">Kişi</option>
                                    <option value="Qadin">Qadın</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Telefon Nömrəsi *</label>
                                <input type="tel" id="phone" onChange={handleChange} value={form.telefon} name="telefon" placeholder="+994 50 123 45 67" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" onChange={handleChange} value={form.email} name="email" placeholder="example@email.com" />
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><i className="fas fa-map-marker-alt"></i> Ünvan Məlumatları</h3>

                        <div className="form-group">
                            <label htmlFor="address">Ünvan *</label>
                            <textarea id="address" onChange={handleChange} value={form.unvan} name="unvan" rows="3" placeholder="Tam ünvanı daxil edin" required></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">Şəhər *</label>
                                <input type="text" id="city" onChange={handleChange} value={form.seher} name="seher" required />
                            </div>

                        </div>
                    </div>

                    <div class="form-section">
                        <h3><i className="fas fa-heartbeat"></i> Sağlamlıq Məlumatları</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="bloodType">Qan Qrupu</label>
                                <select id="bloodType" value={form.qanQrupuId} name="qanQrupuId" onChange={handleChange}>
                                    <option value="">Seçin</option>
                                    <option value="1">A+</option>
                                    <option value="2">A-</option>
                                    <option value="3">B+</option>
                                    <option value="4">B-</option>
                                    <option value="5">AB+</option>
                                    <option value="6">AB-</option>
                                    <option value="7">O+</option>
                                    <option value="8">O-</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="height">Boy (sm)</label>
                                <input type="number" value={form.boy} onChange={handleChange} id="height" name="boy" min="50" max="250" placeholder="170" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="weight">Çəki (kq)</label>
                                <input type="number" value={form.ceki} onChange={handleChange} id="weight" name="ceki" min="10" max="300" placeholder="70" />
                            </div>
                             <div className="form-group">
                                <label htmlFor="weight">Yaş (il)</label>
                                <input type="number" value={form.yas} onChange={handleChange} id="weight" name="yas" min="0" max="150" placeholder="70" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="allergies">Allergiyalar</label>
                            <textarea id="allergies" value={form.allergiyalar} name="allergiyalar" onChange={handleChange} rows="2" placeholder="Bildiyiniz allergiyaları yazın"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="medications">Daimi Dərmanlar</label>
                            <textarea id="medications" value={form.aldigiDermanlar} name="aldigiDermanlar" onChange={handleChange} rows="2" placeholder="Daimi qəbul etdiyiniz dərmanları yazın"></textarea>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3><i className="fas fa-user-friends"></i> Təcili Əlaqə</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="emergencyName">Təcili Əlaqə Adı *</label>
                                <input type="text" id="emergencyName" value={form.teciliElaqeAdi} onChange={handleChange} name="teciliElaqeAdi" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emergencyPhone">Təcili Əlaqə Telefonu *</label>
                                <input type="tel" id="emergencyPhone" value={form.teciliElaqeNomresi} onChange={handleChange} name="teciliElaqeNomresi" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="emergencyRelation">Əlaqə Növü *</label>
                            <select id="emergencyRelation" onChange={handleChange} value={form.elaqesi} name="elaqesi" required>
                                <option value="">Seçin</option>
                                <option value="Heyat Yoldasi">Həyat yoldaşı</option>
                                <option value="Valideyn">Valideyn</option>
                                <option value="Uşaq">Uşaq</option>
                                <option value="Qardaş/Bacı">Qardaş/Bacı</option>
                                <option value="Dost">Dost</option>
                                <option value="Digər">Digər</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" id="resetBtn" onClick={handleReset} className="btn btn-secondary">
                            <i className="fas fa-undo"></i> Təmizlə
                        </button>
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-save"></i> Qeydiyyatdan Keçir
                        </button>
                            {success && <div style={{ color: 'white' ,backgroundColor:'lightgreen'}}>{success}</div>}
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Pasientform
