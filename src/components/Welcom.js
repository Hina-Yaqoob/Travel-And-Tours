

import React from 'react'
import "./WelcomStyle.css"
import img1 from "../assets/girl.png"
const Welcom = () => {
  return (
    <>
       
<div className="row">
<div className="imgWrapper"> 
<img src={img1} alt=""/>
   </div>


<div className="contentWrapper" data-aos="fade-up">
  <div className="content">

    <div className="textWrapper">
      <h2 style={{fontWeight:"bold"}}>Welcome To Our Website</h2>
      <p>Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br>

A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
  </div>
<br></br>
<a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox class="btn-play d-flex">
<span className="link"><span class="fa fa-play"></span></span>
<span className="btn">Watch The Video </span>
</a>

</div>
</div>
    </>
  )
}

export default Welcom