import React, { useEffect, useState } from 'react'
function Home() {

  const Slide = () => {
    document.querySelectorAll('.slide1 img').forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector('.bigslide img').src = item.src
      })
    });
  }
const[ad,setAd]=useState('')
const[rol,setRol]=useState('')
useEffect(()=>{
const localAd=localStorage.getItem("ad")
const role=localStorage.getItem("rol")
if (localAd) {
  setAd(localAd)
}
if (role==="Hekim") {
  setRol(role)
}
},[]);
  return (
    <div>
      <header>
        <h1>Xoş Gəldiniz {rol} {ad}!</h1>
        <p>Modern və güvənli Xəstəxana İdarəetmə Sisteminə daxil oldunuz.</p>
        <video autoPlay loop muted >
          <source src="./images/6914761_Motion_Graphics_Motion_Graphic_1920x1080.mp4" type="video/mp4" />
        </video>
      </header>
      <section className='slider'>
        <h1>Xəstəxanamızdan Şəkillər</h1>

        <div className="bigslide">
          <img src="./images/slide1.jpg" alt="" />
        </div>
        <div className="slide1">
          <img src="./images/slide1.jpg" onClick={Slide} alt="" />
          <img src="./images/slide2.jpg" onClick={Slide} alt="" />
          <img src="./images/slide3.jpg" onClick={Slide} alt="" />
          <img src="./images/slide4.jpg" onClick={Slide} alt="" />
        </div>
      </section>
      <section className='about'>
        <h1>Xəstəxana haqqında</h1>
        <p>Bizim xəstəxana, müasir tibbi avadanlıqlar və peşəkar həkim heyəti ilə xidmətinizdəyik. Sizin sağlamlığınız bizim prioritetimizdir.</p>
      </section>
      <section className='about1'>
        <div className="mask1">
          <i class="fa-solid fa-bed-pulse"></i>
          <h1>120+</h1>
          <p>Xəstə</p>
        </div>
        <div className="mask1">
          <i class="fa-solid fa-hospital-user"></i>
          <h1>25+</h1>
          <p>Həkim</p>
        </div>
        <div className="mask1">
          <i class="fa-solid fa-bed"></i>
          <h1>15+</h1>
          <p>Palata</p>
        </div>
        <div className="mask1">
         <i class="fa-solid fa-headset"></i>
          <h1>40+</h1>
          <p>Randevu</p>
        </div>
      </section>
    </div>
  )
}

export default Home
