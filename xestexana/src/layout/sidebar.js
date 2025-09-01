import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router';


function Sidebar() {
  const [openSubMenus, setOpenSubMenus] = useState({});
const isLoggedIn = !!localStorage.getItem('ad');
const role = localStorage.getItem('rol');
const navigate=useNavigate();
const handleLogout=()=>{
  localStorage.removeItem("ad");
    localStorage.removeItem("token");
      localStorage.removeItem("rol");
navigate("/login");
}

  const handleClick = (key) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  }


  return (
    <div className='sidebar'>
      <img src="./images/medical-logo.jpg" alt="Logo" />
      <ul>
        <li><NavLink to="/">Ana Səhifə</NavLink></li>
{role==="Hekim" &&
         <li className='sub' onClick={() => handleClick('patient')}>
          <NavLink to="#add-patient">Xəstələr haqqında</NavLink>
          <ul className={`sub-menu${openSubMenus['patient'] ? ' open' : ''}`} style={{ display: openSubMenus['patient'] ? 'block' : 'none' }}>
            <li><NavLink to="pasientform">Yeni Xəstə Əlavə Et</NavLink></li>
            <li><NavLink to="pasientlist">Xəstə Siyahısı</NavLink></li>
            <li><NavLink to="#add-patient-history">Xəstə Tarixçəsi</NavLink></li>
         <li><NavLink to="#records">Tibbi Qeydlərim</NavLink></li> 

          </ul>
        </li>
        
     
        //  <li className='sub' onClick={() => handleClick('appointments')}>
        //   <NavLink to="#appointments">Randevu Sistemi</NavLink>
        //   <ul className={`sub-menu${openSubMenus['appointments'] ? ' open' : ''}`} style={{ display: openSubMenus['appointments'] ? 'block' : 'none' }}>
        //     <li><NavLink to="#add-appointment">Yeni Randevu Götür</NavLink></li>
        //     <li><NavLink to="#add-appointment-info">Son Randevu Məlumatlarınız</NavLink></li>
        //   </ul>
        // </li> 
}
          {/* <li className='sub' onClick={() => handleClick('doctors')}><NavLink to="#doctors">Həkimlərimiz</NavLink>
        <ul className={`sub-menu${openSubMenus['doctors'] ? ' open' : ''}`} style={{ display: openSubMenus['doctors'] ? 'block' : 'none' }}>
            <li><NavLink to="#add-doctor">Yeni Həkim Əlavə Et</NavLink></li>
            <li><NavLink to="#add-doctor-info">Həkim Siyahısı</NavLink></li>
          </ul>
        </li>   */}
        {/* <li><NavLink to="#finance">Maliyyə</NavLink></li> */}
        <li><NavLink to="services">Xidmətlər</NavLink></li>

           {isLoggedIn ? (
        <>
        <li onClick={handleLogout}><NavLink>Çıxış</NavLink></li>

        </>
      ) : (
        <li><NavLink to="login"> Giriş</NavLink></li>
      )}
      </ul>
    </div>
  )
}

export default Sidebar
