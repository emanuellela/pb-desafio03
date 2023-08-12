import './Footer.css';
import iconLogo2 from './icons/logo-white.svg';
import iconFb from './icons/facebook.svg';
import iconIg from './icons/instagram.svg';
import iconTt from './icons/twitter.svg';

function Footer(){
    return ( 
        <div className="footer-footer">
        <nav className="nav-footer">
        <div className="footer-logo">
            <img src={iconLogo2} className="logo-white" /> 
            <h2>FitMe</h2>
        </div>
        <div className="container-social">
            <ul className="lista-footer">
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Delivery</a>
            </li>
            <li>
                <a href="#">Help & Support</a>
            </li>
            <li>
                <a href="#">T&C</a>
            </li>
            </ul>
            <div className="social">
            <a href="http://www.facebook.com">
                <img src={iconFb} className="facebook" />
            </a>
            <a href="http://www.instagram.com">
                <img src={iconIg} className="instagram" />
            </a>
            <a href="http://www.twitter.com">
                <img src={iconTt} className="twitter" />
            </a>
            </div>
        </div>       
        <div className="contact-footer">
            <div className="contact-text">
            <p>Contact:</p>
            </div>
            <div className="contact-number">
            <p>+91 123456789</p>
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Footer;







