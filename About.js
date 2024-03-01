// ======= Import Link =======//
import { Link } from "react-router-dom";

// ======= Import Images =======//
import image1 from '../images/Blog6.jpg';
// ====== Import Icons =======//
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiJetpack } from "react-icons/gi";
import { MdOutlinePayment, MdSupport } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
// ======= About Page =======//
const About = () => {
  return (
    <div>
      {/* ======= About Header ====== */}

      <div className="about-header">
        {/* ======= About Text ====== */}
        <div className="about-text">

          <p><Link to={"/"} className="flex items-center ">Home<HiArrowNarrowRight className="pl-2 font-bold" style={{ fontSize: `26px` }} /></Link ></p>

          <h3>Our Industry Works On International Level</h3>
          <h4>sit amet consectetur adipisicing elit. Doloremque, unde aut eum cupiditate corporis reprehenderit.</h4>
        </div>
      </div>

      {/* ======= Section 1 ======= */}
      <div className="about-sec-1">
        <div className="about-sec-text">
          <h1>Welcome To Furno</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sit repellendus necessitatibus veniam id magni recusandae laboriosam ab, <br></br>voluptas architecto nesciunt repellat beatae porro omnis corrupti expedita possimus dolorum autem inventore nisi neque distinctio in libero numquam? Voluptatum, commodi voluptate!<br></br>
            Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit. Consequuntur fuga ipsum inventore suscipit necessitatibus. Earum doloremque beatae incidunt quos nulla sapiente pariatur? Repellendus asperiores provident molestias tenetur facere nostrum dignissimos.</p>

          {/* ===== About Part Inside ===== */}
          <div className="inside">
            <div className="inside-text">
              <GiJetpack style={{ fontSize: `36px`, color: `#555` }} />
              <div className="orders">
                <h4>Fast Shipping</h4>
                <p>Over Order $500</p>
              </div>
            </div>
            <div className="inside-text">
              <MdSupport style={{ fontSize: `36px`, color: `#555` }} />
              <div className="orders">
                <h4>Online Support</h4>
                <p>24/7 Help You</p>
              </div>
            </div>
            <div className="inside-text">
              <MdOutlinePayment style={{ fontSize: `36px`, color: `#555` }} />
              <div className="orders">
                <h4>Secure Payment</h4>
                <p>Order Over $200</p>
              </div>
            </div>
            <div className="inside-text">
              < FaGift style={{ fontSize: `36px`, color: `#555` }} />
              <div className="orders">
                <h4>Weekly Offers</h4>
                <p>Offer On Register</p>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Image  ====== */}
        <div className="about-sec-image">
          <img src={image1} alt="This is an image" />
        </div>
      </div>
      {/* ====== Section 2 ====== */}
      <div className="about-sec2">
        {/* ===== Text ===== */}
        <div className="about-sec2-text">
          <p><Link to={`/`}>Go To Home</Link></p>
          <h2>Best Of Furniture's</h2>
        </div>
      </div>
    </div>

  )
}

export default About