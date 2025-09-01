import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router'
function Pasientlist() {

const navigate=useNavigate();
const handlenavigate=()=>{
    navigate("/pasientform")


}
const [searchParams, setSearchParams] = useSearchParams();
 const pageFromUrl = parseInt(searchParams.get('page')) || 1;

const [user, setUser] = useState([]);
const [page, setPage] = useState(1);
const pageSize=2;
const [totalRecords, setTotalRecords] = useState(0);
const [totalPages, setTotalPages] = useState(0);
useEffect(() => {
  setTotalPages(Math.ceil(totalRecords / pageSize));
}, [totalRecords, pageSize]);

useEffect(() => {
axios.get(`https://localhost:44323/api/Pasient?page=${page}&pageSize=${pageSize}`)
.then(response =>{
    setUser(response.data.pasiyentler || []);
    setTotalRecords(response.data.totalRecords)

})
}, [page])
console.log(user);

  return (
    <div class="patient-list-container">
    <div class="stats-cards">
      <div class="stat-card">
        <h3>1,247</h3>
        <p>Ümumi Xəstə</p>
      </div>
      <div class="stat-card">
        <h3>89</h3>
        <p>Bu Həftə</p>
      </div>
      <div class="stat-card">
        <h3>23</h3>
        <p>Bu Gün</p>
      </div>
      <div class="stat-card">
        <h3>156</h3>
        <p>Aktiv Müalicə</p>
      </div>
    </div>

    
    <div class="patient-list-header">
      <h1>Xəstə Siyahısı</h1>
      <div className="search-filters">
        <div className="search-box">
          <input type="text" id="searchInput" placeholder="Xəstə adı, soyadı və ya ID ilə axtarın..."/>
        </div>
        <select className="filter-select" id="statusFilter">
          <option value="">Bütün statuslar</option>
          <option value="active">Aktiv</option>
          <option value="inactive">Qeyri-aktiv</option>
        </select>
        <select className="filter-select" id="departmentFilter">
          <option value="">Bütün şöbələr</option>
          <option value="cardiology">Kardiolojiya</option>
          <option value="neurology">Nevrologiya</option>
          <option value="orthopedics">Ortopediya</option>
          <option value="pediatrics">Pediatriya</option>
        </select>
        <button className="add-patient-btn" onClick={handlenavigate}>
          + Yeni Xəstə
        </button>
      </div>
    </div>

    <div className="patient-list">
      <table className="patient-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad Soyad</th>
            <th>Yaş</th>
            <th>Telefon</th>
            <th>Şəhər</th>
            <th>Ünvan</th>
            <th>Email</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody id="patientTableBody">
          {user.map((item) => (
            <tr key={item.pasiyentId}>
              <td>{item.pasiyentId}</td>
              <td>{item.tamAd} {item.soyad}</td>
              <td>{item.yas}</td>
              <td>{item.telefon}</td>
              <td>{item.seher}</td>
              <td>{item.unvan}</td>
              <td>{item.email}</td>
              <td>
                <button className="edit-btn">Düzəliş et</button>
                <button className="delete-btn">Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="pagination">
        <button disabled={page===1} onClick={() => setPage(page-1)}>← Əvvəlki</button>
{Array.from({ length: totalPages }, (_, index) => (
  <button
    key={index}
    onClick={() => {
      setPage(index + 1);
      setSearchParams({ page: index + 1 }); // URL də dəyişir
    }}
    className={page === index + 1 ? "active" : ""}
  >
    {index + 1}
  </button>
))}
        <button disabled={page===totalPages} onClick={() => setPage(page+1)}>→ Sonrakı</button>
      </div>
    </div>
  </div>
  )
}
export default Pasientlist
