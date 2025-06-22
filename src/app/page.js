
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import customStyles from "./main.css";
import responsiveCss from "./responsive.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/ProductList";
import React, { useEffect, useState } from 'react';
import Sidebar from "./components/Sidebar";
export default function Home() {

  const [dataSort, setDataSort] = useState("");

  const sortProduct = (sort) => {
    const selectedValue = sort;
    setDataSort(selectedValue);
    console.log("Selected value:", selectedValue);
  }
  // const [showIdealFor, setShowIdealFor] = useState(true);
  const [idealForFilter, setIdealForFilter] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const totalProduct = (total) => {
    const totals = total;
    setTotalProducts(totals);
    console.log("Total products:", total);
  }
  const handleIdealForChange = (selectedValues) => {
    console.log("Selected values:", selectedValues);
    setIdealForFilter(selectedValues);
  };
  const [showFilter, setShowFilter] = useState(true);
  const handleShowHide = (show) => {
    setShowFilter(!show);
    console.log("Show filter:", show);
  }
  return (
    <div >
      <main>
        <Header />
        <Banner />
        <ProductHeader selectFilter={sortProduct} checkfilter={handleShowHide} showTotalproduct={totalProducts}/>
        <div>
          <div className="container">
            <div className="product-wrap-section">
               <div  className={`sidebar-parent grid-3 ${showFilter ? 'd-block' : 'd-none'}`}>
                <Sidebar idealFor={handleIdealForChange} />
              </div>
               <div className={`product-section ${showFilter ? 'grid-8' : 'grid-12'}`}>
             
              <div className="product-list-section">
                <ProductList filter={dataSort} idealProduct={idealForFilter} totalProduct={totalProduct}/>
              </div>
            </div>
            </div>
            
           

          </div>
        </div>


      </main>
      <footer className='footer'>
        <div className="container">
          <div className="footer-content">
            <div className="left-footer grid-8">
              <div className="footer-head">
                <h5 className="color-white">Be the first to know</h5>
                <p className="color-white">Sign up for updates from mettā muse.</p>
              </div>
              <div className="subscribe-box">
                <input type="email" placeholder="Enter your email address" className="subscribe-input" />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
            <div className="right-footer grid-4">
              <div className="footer-head">
                <h5 className="color-white">CONTACT US</h5>
                <a className="color-white" href="tel:+44 221 133 5360">+44 221 133 5360</a>
                <a className="color-white" href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
              </div>
              <div className="footer-head">
                <h5 className="color-white">Currency</h5>
                <div className="footer-currency">
                  <Image src="/img/flag.png" alt="flag-icon" width={16} height={16} className='footer-icon' />
                  <Image src="/img/star.png" alt="star-icon" width={6} height={6} className='footer-icon' />
                  <span className="color-white">USD</span>
                </div>

                <a className="color-white" href="mailto:customercare@mettamuse.com">Transactions will be completed in Euros and a currency reference is available on hover.</a>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-head grid-3">
              <h5 className="color-white">mettā muse</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Artisans</a></li>
                <li><a href="#">Boutiques</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">EU Compliances Docs</a></li>
              </ul>
            </div>
            <div className="footer-head grid-3">
              <h5 className="color-white">Quick Links</h5>
              <ul>
                <li><a href="#">Orders & Shipping</a></li>
                <li><a href="#">Join/Login as a Seller</a></li>
                <li><a href="#">Payment & Pricing</a></li>
                <li><a href="#">Return & Refunds</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-head grid-3">

              <h5 className="color-white">Follow Us</h5>
              <ul className="social-links">
                <li><a href="#"><Image src="/img/Insta.png" alt="insta-icon" width={32} height={32} className='footer-icon' /></a></li>
                <li><a href="#"><Image src="/img/linkedIn.png" alt="linkedin-icon" width={32} height={32} className='footer-icon' /></a></li>
              </ul>

              <div>
                <h5 className="color-white">mettā muse Accepts</h5>
                <div className="payment-icons">
                  <a href="#"><Image src="/img/gpay.png" alt="gpay-icon" width={56} height={35} className='footer-icon' /></a>
                  <a href="#"><Image src="/img/mastercard.png" alt="mastercard-icon" width={56} height={35} className='footer-icon' /></a>
                  <a href="#"><Image src="/img/paypal.png" alt="paypal-icon" width={56} height={35} className='footer-icon' /></a>
                  <a href="#"><Image src="/img/amex.png" alt="amex-icon" width={56} height={35} className='footer-icon' /></a>
                  <a href="#"><Image src="/img/applepay.png" alt="applepay-icon" width={56} height={35} className='footer-icon' /></a>
                  <a href="#"><Image src="/img/pay.png" alt="pay-icon" width={56} height={35} className='footer-icon' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom color-white">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>


      </footer>
    </div>
  );
}
