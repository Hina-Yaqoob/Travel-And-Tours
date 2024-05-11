import React from 'react'
import "./FooterStyle.css"

  


function Footer() {
  return (
    <>
    <div className='main'>
        <div className='heading'>
          <div> 
          <h3>Quick Link</h3>
          <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
            <p>Rooms</p>
        </div>
        <div>
        <h3>Support</h3>
        <p>Our Location</p>
            <p>The Hosts</p>
            <p>About</p>
            <p>Contact</p>
            <p>Restaurant</p>
          </div>
          
          <div>
          <h3>Contact Info</h3>
          <h6>Address:</h6>
            <p>98 West 21th Street, Suite 721</p>
            <p>New York NY 10016</p>
            <h6>Phone:</h6>
            <p>(+1) 435 3533</p>
<h6>Email:</h6>
<p>info@yourdomain.com</p>
          </div>
          <div>
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
            <p>Your email... </p>
              <hr></hr>
          
          </div>
         

        </div>
        <div className='bottom'>
         <div className='her'>  <hr></hr></div>
         <p>Copyright © 2024 All rights reserved | This template is made with  by Colorlib</p>
        <div className='socialmediaicons'>
          <div>
          <i className='fa-brands fa-facebook-square'></i>
          </div>
          <div>
          <i className='fa-brands fa-twitter-square'></i>
          </div>
        
          <div>
          <i className='fa-brands fa-instagram-square'></i>
          </div>
         
          <div>
          <i className='fa-brands fa-youtube-square'></i>
          </div>
          </div>
          </div>


    </div>
    </>
  )
}

export default Footer