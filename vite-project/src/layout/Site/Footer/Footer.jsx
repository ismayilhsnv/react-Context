import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='footer1__div1'>
          <h2>SUPRO</h2>
          <a href="#"><p><i className="fa-solid fa-location-dot"></i>184 Main Rd E, St Albans<br/>VIC 3021, Australia</p></a>
          <a href="#"><p><i className="fa-regular fa-envelope"></i>contact@company.com</p></a>
          <a href="#"><p><i className="fa-solid fa-phone"></i>+001 2233 456</p></a>
        </div>
        <div className='footer1__div2'>
          <h5>HELP & INFORMATION</h5>
          <a href="#">Track Order</a>
          <a href="#">Premier Delivery</a>
          <a href="#">Student Discount</a>
        </div>
        <div className='footer1__div3'>
          <h5>ABOUT SUPRO</h5>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Coporate</a>
          <a href="#">Investors</a>
        </div>
        <div className='footer1__div4'>
          <h5>ONLINE SHOP</h5>
          <a href="#">Shoes</a>
          <a href="#">Bags</a>
          <a href="#">Wallets</a>
          <a href="#">Belts</a>
        </div>
      </div>
      <div className='footer2'>
        <div className='footer2__divp'>
          <p>Copyright © 2023 Magento, Inc. All rights reserved.</p>
        </div>       
        <div className='footer2__icons'>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
          <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className='footer2__div2'>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-cc-discover"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      
    </div>
  )
}

export default Footer