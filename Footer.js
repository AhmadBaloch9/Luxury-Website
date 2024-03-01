import React from 'react';

// ====== Import Logo =======//

import Logo from '../images/logo.webp';

//===== Import Payment Methods Icons ======//

import {FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa} from "react-icons/fa";

import { LiaCopyrightSolid } from "react-icons/lia";

// ======= Import Link =======//

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
         {/* ======= Footer ====== */}
         <div className="footer">
         {/* ===== Footer Links 1 ====== */}
          <div className="footer-links first">
                 <img src={Logo} alt="This is an image" />
                 <h5>East 21st Street / 3 New York NY10</h5>
                 <p>Email: youremail@site.com</p>
                 <p>Phone: +1 408 996 1010</p>
          </div>
          {/* ===== Footer Links 2====== */}
          <div className="footer-links">
                <ul>
                  <li><Link className='footer-tags' to={`/`}>Company Information</Link></li>
                  <li><Link className='footer-tags' to={`/shop`}>Conditions Of Sales</Link></li>
                  <li><Link className='footer-tags' to={`/contact`}>Privacy Policy</Link></li>
                  <li><Link className='footer-tags' to={`/contact`}>Returns and Refunds</Link></li>
                  <li><Link className='footer-tags' to={`/blog`}>Dispute Regulation</Link></li>
                  <li><Link className='footer-tags' to={`/about`}>Terms and Conditions</Link></li>
                </ul>
          </div>
          {/* ===== Footer Links 3====== */}
          <div className="footer-links">
          <ul>
                  <li><Link className='footer-tags' to={`/about`}>Fast Shipping</Link></li>
                  <li><Link className='footer-tags' to={`contact`}>Paypal</Link></li>
                  <li><Link className='footer-tags' to={`/contact`}>Secure Payment</Link></li>
                  <li><Link className='footer-tags' to={`/`}>30 Days Return Policy</Link></li>
                  <li><Link className='footer-tags' to={`shop`}>Business Development</Link></li>
                  <li><Link className='footer-tags' to={`/about`}>Terms Us</Link></li>
                </ul>
          </div>
          {/* ===== Footer Links 4====== */}
          <div className="footer-links">
                 <h2>Subscribe Now</h2>
                 <div className="input-elem">
                  <input type="text" placeholder='Enter Email Address'/>
                  <button>Sign Up</button>
                 </div>
                  <div className="payment-gateway">
                         <FaCcPaypal className='pay-icons'/>
                         <FaCcMastercard  className='pay-icons'/>
                         <FaCcVisa  className='pay-icons'/>
                         <FaCcStripe  className='pay-icons'/>
                         <FaCcApplePay  className='pay-icons'/>
                  </div>
          </div>
         </div>
         {/* ====== Copy Right ====== */}
         <div className="copy-right">
                  <div className='lia'>Copyright <LiaCopyrightSolid/> 2024 | Shahzad Ahmad Baloch</div>
         </div>
    </div>
  )
}

export default Footer