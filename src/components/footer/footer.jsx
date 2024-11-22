import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return(

    <center>
  <footer>

    <div className="logo">
    <img src="suplyr-logo-light.png" alt="" />
    <p> &copy; Suplyr 2024 All Rights Resereved. </p>
    </div>


<div className="footer-content">
<div className="company">
        <ul>
            <li><p>Company</p></li>
            <li><span>About Us</span></li>
        </ul>
    </div>

    <div className="contact">
        <ul>
            <li><p>Contact us</p></li>
            <li><span>Help & Support</span></li>
        </ul>
    </div>

    <div className="legal">
        <ul>
            <li><p>Legal</p></li>
            <li><span>Terms & Conditions</span></li>
            <li><span>Privacy Policy</span></li>
        </ul>
    </div>

    <div className="socials">
        <ul>
            <li><p>Socials</p></li>
            <li><span><AiFillInstagram /></span></li>
            <li><span><FaLinkedin /></span></li>
        </ul>
    </div>
  
</div>
    
  </footer>
  </center>
  )
};

export default Footer;
