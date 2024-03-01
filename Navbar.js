import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// ====== Import React Icons ======//;

import { IoIosHeartEmpty } from "react-icons/io";

import { BiGitCompare } from "react-icons/bi";

import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";

import { GoSearch } from "react-icons/go";

import { HiMiniXMark } from "react-icons/hi2";

import { IoIosGitCompare } from "react-icons/io";

import { LiaOpencart } from "react-icons/lia";

import { GrMenu } from "react-icons/gr";
// ======= Import Images ======//
import Logo from '../images/logo.webp';

import image1 from '../images/image12.png';

import image2 from '../images/image13.png';

import image3 from '../images/image14.png';

import image4 from '../images/image15.png';

import image5 from '../images/image22.png';



const Navbar = () => {

  // ===== Use States =====//

  // ==== Search State ====//
  const [display, setDisplay] = useState(false);

  // ===== Wishlist State ======//
  const [wish, setWish] = useState(false)

  // ====== Compare State =====//
  const [comp, setComp] = useState(false);

  // ======== Cart State =======//
  const [carts, setCarts] = useState(false);

  // ===== Navbar State =====//
  const [navbar, setNavbar] = useState(false)
  // ======= Functions ======//

  // ======= Search Bar Appear/Disappear Function =====//

  const searchBar = () => {
    setDisplay(true)
  }

  const hidden = () => {
    setDisplay(false)
  }

  // ======= WishList Function Appear and Disappear ======//

  const visibleWish = () => {
    setWish(true)
  }

  const unVisible = () => {
    setWish(false)
  }

  // ======= Compare Function =======//

  const compareShow = () => {
    setComp(true)
  }

  const compareClose = () => {
    setComp(false)
  }

  // ======== Cart Function ======//

  const showCart = () => {
    setCarts(true)
  }

  const cartClose = () => {
    setCarts(false)
  }

  // ====== Navbar Function =======//

  const showMenu = () => {
    setNavbar(true)
  }

  const closeMenu = () => {
    setNavbar(false)
  }

  return (
    <div>
      <div className="nav-bar">
        {/* ==== Menu Icon ===== */}
        <GrMenu className='showMenu' onClick={showMenu} />
        <div className="left" style={{ left: navbar ? `0` : `-1000px` }}>
          <ul>
            {/* ===== Close Icon ====== */}
            
            <HiMiniXMark className='closeLeft' onClick={closeMenu} />

            <li><Link to={'/'} className='links'>Home</Link></li>

            <li><Link to={'/shop'} className='links'>Shop</Link></li>

            <li><Link to={'/blog'} className='links'>Blogs</Link></li>

            <li><Link to={'/about'} className='links'>About</Link></li>

            <li><Link className='links' onClick={searchBar}><GoSearch className='empty' />Search</Link></li>
            <li><Link to={'/contact'} className='links'>Contact</Link></li>
          </ul>
        </div>
        <div className="center">
          <Link to={"/"} className='logo'><img src={Logo} alt="" /></Link>
        </div>
        <div className="right">
          <ul>
            <li><Link className='links link-wish' onClick={visibleWish}><IoIosHeartEmpty className='empty' />WishList</Link></li>
            <li><Link className='links link-com' onClick={compareShow}><BiGitCompare className='empty' />Compare</Link></li>
            <li><Link className='links cart-shop' onClick={showCart}><FiShoppingCart className='empty' />Cart</Link></li>
          </ul>
        </div>
      </div>

      {/* ======== Search ========= */}
      <div className="search" style={{ top: display ? `0%` : `-2000px` }}>
        {/* ===== Close Icon ====== */}
        <HiMiniXMark className='search-close' onClick={hidden} />
        {/* ==== Text ==== */}
        <div className="search-text">
          <h1>What You Looking For?</h1>
          <div className="search-input">
            <input type="text" name="" id="" placeholder='Search for...' />
            <FiSearch style={{ fontSize: `20px`, color: `#555` }} />
          </div>

          {/* ======== Trending ======= */}
          <div className="trending">
            <h3>Trending Searches:</h3>
            <p>Home</p>
            <p>Decor</p>
            <p>Wooden</p>
          </div>

          {/* ======= Categories ======= */}
          <h1>Popular Categories</h1>
          <div className="categories">

            {/* ======= Cart 1 ======= */}
            <div className="categories-cart">
              {/* ===== Cart 1 Image ==== */}
              <div className="cat-cart-img">
                <img src={image1} alt="This is an image" />
              </div>
              {/* ===== Cart 1 Text ====== */}
              <div className="cat-cart-text">
                <h4>Shelves</h4>
                <p>2 Products</p>
              </div>
            </div>

            {/* ======= Cart 2 ======= */}
            <div className="categories-cart">
              {/* ===== Cart 2 Image ==== */}
              <div className="cat-cart-img">
                <img src={image2} alt="This is an image" />
              </div>
              {/* ===== Cart 2 Text ====== */}
              <div className="cat-cart-text">
                <h4>Chairs</h4>
                <p>3 Products</p>
              </div>
            </div>

            {/* ======= Cart 3 ======= */}
            <div className="categories-cart">
              {/* ===== Cart 3 Image ==== */}
              <div className="cat-cart-img">
                <img src={image3} alt="This is an image" />
              </div>
              {/* ===== Cart 3 Text ====== */}
              <div className="cat-cart-text">
                <h4>Lamps</h4>
                <p>6 Products</p>
              </div>
            </div>

            {/* ======= Cart 4 ======= */}
            <div className="categories-cart">
              {/* ===== Cart 4 Image ==== */}
              <div className="cat-cart-img">
                <img src={image4} alt="This is an image" />
              </div>
              {/* ===== Cart 4 Text ====== */}
              <div className="cat-cart-text">
                <h4>Tables</h4>
                <p>9 Products</p>
              </div>
            </div>

            {/* ======= Cart 5 ======= */}
            <div className="categories-cart">
              {/* ===== Cart 5 Image ==== */}
              <div className="cat-cart-img">
                <img src={image5} alt="This is an image" />
              </div>
              {/* ===== Cart 5 Text ====== */}
              <div className="cat-cart-text">
                <h4>Doors</h4>
                <p>2 Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======== WishList ========= */}

      <div className="wishlist" style={{ right: wish ? `0` : `-1000px` }}>
        {/* ======  Close Icon ====== */}
        <HiMiniXMark onClick={unVisible} className='wishClose' />
        {/* ===== Text ===== */}

        <div className="wish-text">
          <div className="heart">
            <FiHeart style={{ fontSize: `29px`, color: `#777` }} />
          </div>
          <h2>My WishList</h2>
          <p>No Products in the Wishlist</p>
        </div>
      </div>
      {/* ======== Compare ======== */}
      <div className="compare" style={{ right: comp ? `0` : `-1000px` }}>
        <HiMiniXMark onClick={compareClose} className='compareClose' />
        <div className="compare-text">
          <IoIosGitCompare className='compareIcon' />
          <h2>My Compare</h2>
          <p>No Products in the Compare</p>
        </div>
      </div>
      {/* ======== Cart ======== */}
      <div className="cart-tog" style={{ right: carts ? `0px` : `-1000px` }}>
        <HiMiniXMark onClick={cartClose} className='cartClose' />
        <div className="cart-text">
          <LiaOpencart className='cartIcon' />
          <h2>My Cart</h2>
          <p>No Products in Your Cart</p>
          <Link to={`/shop`}><button>Return To Shop</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar