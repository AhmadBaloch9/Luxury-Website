// ====== Import Link Tag =======//

import { Link } from 'react-router-dom';

// ======== Import Images ========//
import image2 from '../images/Blog3.png';

import image3 from '../images/Blog8.jpg';

import image4 from '../images/Blog4.jpg';

import image5 from '../images/Blog5.jpg';

import image6 from '../images/Blog6.jpg';

import image7 from '../images/Blog7.jpg';

import image8 from '../images/Blog8.jpg';

import image9 from '../images/Blog9.jpg';

import image10 from '../images/Blog10.jpg';

// ======== Import Icons ========//

import { BsCalendarDate } from "react-icons/bs";

import { BiMessage } from "react-icons/bi";

import { FiEye } from "react-icons/fi";

import { HiArrowNarrowRight } from 'react-icons/hi';

const Blog = () => {
  return (
    <div>
      {/* ====== Header ====== */}
      <div className="blogs-header">
        {/* ===== Text ===== */}
        <div className="blogs-head-text">
          <p><Link to={"/"} className="flex items-center ">Home<HiArrowNarrowRight className="pl-2 font-bold" style={{ fontSize: `26px` }} /></Link ></p>
          <h1>New Items Are Released Weekly<br></br>Check Out Some Of Our Newest Arrivals Bellow</h1>
          <button>See More</button>
        </div>
      </div>
      {/* ========= Blogs Carts ======== */}
      <div className="blogs-sec">
        {/* ======== Blogs Carts 1 ======== */}
        <div className="blog-cart">
          <img src={image7} alt="This is an image" />
          <h1>Beauty Of The All Kitchens Thats Buyers Like More</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 2 ======== */}
        <div className="blog-cart">
          <img src={image2} alt="This is an image" />
          <h1>New Items Are The Stylish Products</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 3 ======== */}
        <div className="blog-cart">
          <img src={image3} alt="This is an image" />
          <h1>Windows And Shelves Are Arrivals</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 4 ======== */}
        <div className="blog-cart">
          <img src={image4} alt="This is an image" />
          <h1>Awesome Product Among These All</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 5 ======== */}
        <div className="blog-cart">
          <img src={image5} alt="This is an image" />
          <h1>Fresh And Clean Chairs Are Visible</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 6 ======== */}
        <div className="blog-cart">
          <img src={image6} alt="This is an image" />
          <h1>Doors Are So Clean And Strongs</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 7 ======== */}
        <div className="blog-cart">
          <img src={image7} alt="This is an image" />
          <h1>Rooms Are Cool And Clean</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 8 ======== */}
        <div className="blog-cart">
          <img src={image8} alt="This is an image" />
          <h1>Beautiful Dishes Are Displayed In A Few Days</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 9 ======== */}
        <div className="blog-cart">
          <img src={image9} alt="This is an image" />
          <h1>Beauty Of The All Kitchens Thats Buyers Like More</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
        {/* ======== Blogs Carts 10 ======== */}
        <div className="blog-cart">
          <img src={image10} alt="This is an image" />
          <h1>Our Company Workers Createvity</h1>
          <div className="date">
            <BsCalendarDate />
            <p>February 22, 2024</p>
            <FiEye />
            <p>657</p>
            <BiMessage />
            <p>0</p>
          </div>
          <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda minus dolores dicta voluptatem reprehenderit unde officiis quam. Similique, fugit officiis? Repudiandae adipisci magnam iure rem delectus molestias sequi in reprehenderit illo aut, quaerat enim placeat, temporibus vel suscipit iste!</h6>
        </div>
      </div>
    </div>
  )
}

export default Blog