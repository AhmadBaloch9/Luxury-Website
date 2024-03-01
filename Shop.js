// ====== Import Image =====//
import Header from '../images/shop1.png';
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
// ======= Import Link Tag ======//
import { Link } from 'react-router-dom';

// ======== Import Icons =======//
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FiEye, FiHeart } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";

// ====== Shop Page =====//
const Shop = () => {
  return (
    <div>

      {/* ====== Header ======= */}
      <div className="shop-header">
          <div className="head-left">
            <h2>Unique Products By<br></br>Handed Design</h2>
            <p>Blog sriracha, distillery ugh small batch retro literally coloring book <br></br>disruptin iceland austin gochujang affogato</p>
            <button>Discover Now</button>
          </div>
          <div className="head-right">
            <img src={Header} alt="This is an image" />
          </div>     
      </div>
      {/* ===== Heading ===== */}
      <div className="hading">
        <h1>Our Shop</h1>
        <p>Most Products are here thats You See</p>
      </div>
      {/* ====== Section 1 ======== */}
      <div className="shop-sec1">
        <div className="shop-text">
        {/* ====== Products Categories */}
          <ul>
          <h5>Products Categories</h5>
            <li><Link>Chairs</Link></li>
            <li><Link>Kitchen</Link></li>
            <li><Link>Lighting</Link></li>
            <li><Link>Plants</Link></li>
            <li><Link>Rug and Decors</Link></li>
            <li><Link>Shelves</Link></li>
          </ul>
          <ul>
          {/* ======= Filter Materials ======= */}
          <h5>Filter By Material</h5>
          {/* ====== Check Box ====== */}
           <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <p>Fabric</p>
            <p>(8)</p>
           </div>
           <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <p>Lather Match</p>
            <p>(4)</p>
           </div>
           <div className="check-boxes">
            <input type="checkbox" name="" id="" />
            <p>Wooden Products</p>
            <p>(16)</p>
           </div>
          </ul>
          <ul>
          {/* ====== Rating ======= */}
          <h5>Average Rating</h5>
               <div className="rating">
                <input type="checkbox" name="" id="" />
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <p>(05)</p>
               </div>
               <div className="rating">
                <input type="checkbox" name="" id="" />
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStar className='star'/>
                <IoIosStarHalf className='star'/>
                <p>(04)</p>
               </div>
          </ul>
        </div>
        <div className="shop-image">
        <div className="sec-5 shop-sec">
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
        </div>

      </div>
    </div>
  )
}

export default Shop