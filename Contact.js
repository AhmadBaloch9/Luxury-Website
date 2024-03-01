// ========Import Link ========//

import { Link } from "react-router-dom";

// ===== Import Icons ======//

import { HiArrowNarrowRight } from "react-icons/hi";

// ======= Contact Us Page =======//

const Contact = () => {

  return (
    <div>
      {/* ====== Header ====== */}
      <div className="blogs-header contact">
        {/* ===== Text ===== */}
        <div className="blogs-head-text contact text">
        <p className="flex content-center items-center" style={{color:`#555`}}><Link to={"/"} className="flex items-center ">Home<HiArrowNarrowRight className="pl-2 font-bold" style={{ fontSize: `26px` }} /></Link ></p>
          <h1>Contact Us</h1>
        </div>
      </div>
          {/* ======= Section 1 ======= */}

          <div className="contact-sec">
          {/* Section 1 Parts */}
          <div className="contact-part">
               <h2>Leave Us A Message</h2>
               <p>It is a long established fact that a reader will be distracted by the readables content of a page when bookings layout. <br></br>The point ofen using its Lorem Ipsum that has a more-or-less.</p>
               <div className="name">
                    <div className="first">
                 <p>First Name*</p>
                  <input type="text" placeholder="Surname" required/>
                  </div>
                  <div className="first">
                 <p>Last Name*</p>
                  <input type="text" placeholder="Full Name " required/>
                  </div>
               </div>
               <p>Subject*</p>
                  <input type="text" placeholder="Enter Your Subject" required/>
                  <p>Your Message*</p>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Share Your Thoughts"></textarea>
          </div>
          <div className="contact-part">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13616.93954070468!2d74.30201890793457!3d31.435199950112803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1708690536581!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          </div>
</div>

    </div>
  )
}

export default Contact