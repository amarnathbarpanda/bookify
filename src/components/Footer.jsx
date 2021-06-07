import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Footer() {
    const socialIcon = {
        fontSize: 40,
        margin:'1rem'
    }
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
        <div className="footer__left__wrapper">
          <div className="footer__loc">
            <img src="img/location.png" alt="" />
            <span>Hanuman Colony,Sakhipara,Sambalpur.</span>
          </div>
          <div className="footer__phone">
            <img src="img/phone.png" alt="" />
            <span>+91 9090321633</span>
          </div>
          <div className="footer__mail">
            <img src="img/mail.png" alt="" />
            <span>suppot@bookify.com</span>
          </div>
          </div>
        </div>
        <div className="footer__center">
          <h3>About us</h3>
          <p>
            BookiFy is a world wide book selling company. We operate since 2005
            and we offer a lot of new textbooks on various topics such as
            business, web development, and more.
          </p>
        </div>
        <div className="footer__right">
          <h3>Social Media Links</h3>
          <div className="social__links">
            <span className="fb">
              <FacebookIcon style={socialIcon}/>
            </span>
            <span className="insta">
              <InstagramIcon style={socialIcon}/>
            </span>
            <span className="tw">
              <TwitterIcon style={socialIcon}/>
            </span>
            <span className="wp">
              <WhatsAppIcon style={socialIcon}/>
            </span>
          </div>
        </div>
      </div>
      <span className="footer_copyright">
        2021 &copy; BookiFy. All Right Reserved.
      </span>
    </div>
  );
}

export default Footer;
