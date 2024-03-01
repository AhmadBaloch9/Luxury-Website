import Carousel from 'react-multi-carousel';

// ==== Import Images =====//

import { useEffect, useState } from 'react';

import image1 from '../images/image1.webp';

import image2 from '../images/image2.webp';

import image3 from '../images/image3.webp';

import image4 from '../images/image4.png';

import image12 from '../images/image12.png';

import image13 from '../images/image13.png'

import image14 from '../images/image14.png'

import image15 from '../images/image15.png'

import image16 from '../images/image14.png'

import image17 from '../images/image17.png'

import image18 from '../images/image13.png'

import image19 from '../images/image15.png'

import image21 from '../images/image22.png'

import image23 from '../images/image15.png'

import image24 from '../images/image14.png'

import Product1 from '../images/Product1.png';

import Product7 from '../images/Product7.png';

import Product8 from '../images/Product8.png';

import Kitchen2 from '../images/Kitchen2.png';

import Lamp4 from '../images/Light4.png';

import Rug1 from '../images/Rug1.png';

import Image30 from '../images/image25.jpg';

import Image31 from '../images/image26.webp';

import Image32 from '../images/image28.webp';


// ====== Import Link ======//

import { Link } from 'react-router-dom';

// ======Import React Icons ======//

import { FiEye, FiHeart } from "react-icons/fi";

import { IoIosHeartEmpty } from "react-icons/io";

import { CgShoppingCart } from "react-icons/cg";

import { GiShoppingBag } from "react-icons/gi";

import { BsCalendarDate } from "react-icons/bs";

import { BiMessage } from "react-icons/bi";

const Home = () => {

  return (
    <div>
      {/* ====== Header ====== */}
      <div className="header">
        {/* ====== Image 1 ====== */}
        <div className="image1">
          {/* ====== Image 1 Text ======= */}
          <div className="text">
            <p>New Collection</p>
            <h3>Refresh Home Decor<br></br>with these wooden piece</h3>
            <span>Start For Today</span>
          </div>
          <img src={image1} alt="This is an image" />
        </div>
        <div className="image2">
          {/* ====== Image 2 Text ======= */}
          <div className="text-2">
            <span>Beauty of Everywhere</span>
            <h4>Awesome Table</h4>
            <Link to={`/shop`}><button>See More</button></Link>
          </div>
          {/* ====== Image 1 ====== */}
          <img src={image2} alt="This is an image" />
          {/* ===== Bottom Text ===== */}
          <div className="bottom-text">
            <p>Upto 40% Discount</p>
            <h3>Find Your Favorite</h3>
          </div>
        </div>
      </div>
      {/* ======= Section 1 ======== */}
      <div className="sect-1">
        <div className="part-left">
          {/* ======= Left Text =======*/}
          <div className="left-text">
            <h4>Best Of All</h4>
            <p>See Your Thoughts</p>
            <Link className='see-more' to={`/`}>See More</Link>
          </div>
          <img src={image3} alt="This is an image" />
        </div>
        <div className="part-right">
          <h1>Home Decor Ecommerce Demo</h1>
          <p> amet consectetur adipisicing elit. Voluptatum animi repellendus at ipsum! Non amet ea inventore architecto molestias possimus.</p>
          <button>Buy it Now</button>
        </div>
      </div>
      {/* ======= Section 2 ======== */}
      <div className="sect-1">
        <div className="part-right">
          <h1>Unique Products with Handed Design</h1>
          <p> amet consectetur adipisicing elit. Voluptatum animi repellendus at ipsum! Non amet ea inventore architecto molestias possimus.</p>
          <button>Buy it Now</button>
        </div>
        <div className="part-left">
          {/* ======= Left Text =======*/}
          <div className="left-text">
            <h4>Simplicity</h4>
            <p>See Your Thoughts</p>
            <Link className='see-more' to={`/`}>See More</Link>
          </div>
          <img src={image4} alt="This is an image" />
        </div>
      </div>
      {/* ===== Custom Hading ===== */}
      <div className="hading">
        <h1>Shop By Categories</h1>
        <p>Dummy texting of the printings typesetting</p>
      </div>
      {/* ======= Section 3 ========= */}
      <div className="sec-3">
        {/* ===== Cart 1 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>New Plants</h3>
            <p>4 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Product1} alt="This is an image" />
          </div>
        </div>
        {/* ===== Cart 2 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>Precious Shelves</h3>
            <p>5 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Product8} alt="This is an image" />
          </div>
        </div>
        {/* ===== Cart 3 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>Plan Chairs</h3>
            <p>7 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Product7} alt="This is an image" />
          </div>
        </div>
        {/* ===== Cart 4 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>Fresh Kitchen</h3>
            <p>9 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Kitchen2} alt="This is an image" />
          </div>
        </div>
        {/* ===== Cart 5 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>Lighting</h3>
            <p>10 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Lamp4} alt="This is an image" />
          </div>
        </div>
        {/* ===== Cart 6 ===== */}
        <div className="cart">
          {/* ===== Cart Icons ==== */}
          <div className="icons">
            <Link className='icons-link'><FiEye className='icons-fi' /></Link>
            <Link className='icons-link'><IoIosHeartEmpty className='icons-fi' /></Link>
            <Link className='icons-link'><CgShoppingCart className='icons-fi' /></Link>
          </div>
          {/* ===== Cart Text ==== */}
          <div className="text-box">
            <h3>Rug & Decors</h3>
            <p>1 Products</p>
          </div>
          {/* ===== Cart Image ==== */}
          <div className="img-box">
            <img src={Rug1} alt="This is an image" />
          </div>
        </div>
      </div>
      {/* ===== Custom Hading ===== */}
      <div className="hading">
        <h1>New items are realesed weekly</h1>
        <p>All are the mostly impressive</p>
      </div>
      {/* ========= Section 4 ========= */}
      <div className="sec-4">
        {/* ======== Text  ======== */}
        <div className="sec-4-text">
          <p>Tranding Collection</p>
          <h4>40% Flate on Choises</h4>
          <span>Get relaxing by style having wooden matarials on<br></br>40% Discount</span>
        </div>
      </div>
      {/* ======= Section 5 ======== */}
      {/* ===== Custom Hading ===== */}
      <div className="hading">
        <h1>Featured Products</h1>
        <p>Printings typesetting amet industry</p>
      </div>
      {/* ======== Section 5 ========= */}
      <div className="sec-5">
        {/* ====== Box 1 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image12} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Beautiful Lamp</p>
            <h3>Fancy Color Lamp</h3>
            <p>$200.00</p>
          </div>
        </div>
        {/* ====== Box 2 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image13} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Striped</p>
            <h3>Blue Striped</h3>
            <p>$20.00</p>
          </div>
        </div>
        {/* ====== Box 3 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image14} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Port</p>
            <h3>Table Port</h3>
            <p>$50.00</p>
          </div>
        </div>
        {/* ====== Box 4 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image15} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Flowers</p>
            <h3>Twisty Flowers</h3>
            <p>$40.00</p>
          </div>
        </div>
        {/* ====== Box 5 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image16} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Chairs</p>
            <h3>Awesome Chair</h3>
            <p>$500.00</p>
          </div>
        </div>
        {/* ====== Box 6 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image17} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Kitchen</p>
            <h3>Clean Kitchen</h3>
            <p>$150.00</p>
          </div>
        </div>
        {/* ====== Box 7 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image18} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Plants</p>
            <h3>Greenery Plants</h3>
            <p>$50.00</p>
          </div>
        </div>
        {/* ====== Box 8 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image19} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Lamps</p>
            <h3>Colorful Lamp</h3>
            <p>$250.00</p>
          </div>
        </div>
        {/* ====== Box 9 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image21} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Stoles</p>
            <h3>Awesome Stoles</h3>
            <p>$350.00</p>
          </div>
        </div>
        {/* ====== Box 10 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image18} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Rooms</p>
            <h3>Fresh and Clean Rooms</h3>
            <p>$70.00</p>
          </div>
        </div>
        {/* ====== Box 11 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image23} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Doors</p>
            <h3>Strong Doors</h3>
            <p>$150.00</p>
          </div>
        </div>
        {/* ====== Box 12 ======= */}
        <div className="sec-5-box">
          <div className="box-img">
            <div className="add-Cart">
              <h4><FiEye /></h4>
              <h4><GiShoppingBag /></h4>
              <h4><FiHeart /></h4>
            </div>
            <img src={image24} alt="This is an image" />
          </div>
          <div className="box-text">
            <p>Strikes</p>
            <h3>Charming Strike</h3>
            <p>$550.00</p>
          </div>
        </div>
      </div>
      {/* =======Section 6 ======== */}
      <div className="sec-6">
        <div className="sec-6-text">
          <p>20% Discount</p>
          <h4>Fresh and Clean Kitchen</h4>
          <span>Get relaxing by style having wooden matarials on<br></br>20% Discount</span>
        </div>
      </div>
      {/* ======= Section 7 ========= */}
       {/* ===== Custom Hading ===== */}
       <div className="hading">
        <h1>Our Blogs</h1>
        <p>Dummy texting of the printings typesetting</p>
      </div>
      <div className="sec-7">
        {/* ====== Section 7 Cart =====*/}
        {/* ==== Cart 1 ==== */}
        <div className="sec-7-cart">
          <img src={Image30} alt="This is an image" />
          {/* ===== Section 7 Cart Text ===== */}
          <div className="sec-7-text">
            <h1>Fresh and Clean Kitchen</h1>
            <div className="date">
              <BsCalendarDate className='icons' />
              <p>February 21,2024</p>
              <BiMessage  className='icons'/>
              <p>0</p>
            </div>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, officiis. Corrupti similique architecto aliquid dolore.</h5>
          </div>
        </div>
        {/* ==== Cart 2 ==== */}
        <div className="sec-7-cart">
          <img src={Image32} alt="This is an image" />
          {/* ===== Section 7 Cart Text ===== */}
          <div className="sec-7-text">
            <h1>Beautiful Shelves With Different Colors</h1>
            <div className="date">
              <BsCalendarDate className='icons' />
              <p>February 21,2024</p>
              <BiMessage  className='icons'/>
              <p>0</p>
            </div>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, officiis. Corrupti similique architecto aliquid dolore.</h5>
          </div>
        </div>
        {/* ==== Cart 3 ==== */}
        <div className="sec-7-cart">
          <img src={Image31} alt="This is an image" />
          {/* ===== Section 7 Cart Text ===== */}
          <div className="sec-7-text">
            <h1>Reliable and Grunted Parts</h1>
            <div className="date">
              <BsCalendarDate className='icons' />
              <p>February 21,2024</p>
              <BiMessage  className='icons'/>
              <p>0</p>
            </div>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, officiis. Corrupti similique architecto aliquid dolore.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home