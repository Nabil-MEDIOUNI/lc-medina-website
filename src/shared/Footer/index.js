/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import { Link } from 'gatsby';
import React from 'react';

// Local images
import FACEBOOK_ICON from '../../assets/icons/facebook-icon.svg';
import INSTAGRAM_ICON from '../../assets/icons/instagram-icon.svg';
import YOUTUBE_ICON from '../../assets/icons/youtube-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Footer Component                                 */
/* -------------------------------------------------------------------------- */
function Footer() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="footer flex flex-column">
      <div className="top-section flex">
        <div className="single-item about-medina">
          <p className="title">AIESEC in Manouba</p>
          <p className="medina-description">
            AIESEC in Manouba is a Local Committee, located at the Higher School
            of Commerce of Tunis - University of Manouba. This organization is
            an opportunity for young people to develop their leadership
            potential through international internships and volunteering
            opportunities. It was founded in 1989 and is a non-profit,
            non-governmental organization entirely run by young people for young
            people.
          </p>
        </div>
        <div className="single-item">
          <p className="title">About</p>
          <ul className="list">
            <li className="list-item">
              <Link to="/about-us">About MEDINA</Link>
            </li>
            <li className="list-item">
              <Link to="/">Help</Link>
            </li>
            <li className="list-item">
              <Link to="/">Blog</Link>
            </li>
            <li className="list-item">
              <Link to="/">Financial Statments</Link>
            </li>
            <li className="list-item">
              <Link to="/">Annual Report</Link>
            </li>
          </ul>
        </div>
        <div className="single-item">
          <p className="title">Products</p>
          <ul className="list">
            <li className="list-item">
              <Link to="/">Global Volunteer</Link>
            </li>
            <li className="list-item">
              <Link to="/">Global Talent</Link>
            </li>
            <li className="list-item">
              <Link to="/">Global Teacher</Link>
            </li>
          </ul>
        </div>
        <div className="single-item">
          <p className="title">MEDINA Opportunities</p>
          <ul className="list">
            <li className="list-item">
              <Link to="/">OGX Opportunities</Link>
            </li>
            <li className="list-item">
              <Link to="/">ICX Opportunities</Link>
            </li>
          </ul>
        </div>
        <div className="single-item">
          <p className="title">Membership</p>
          <ul className="list">
            <li className="list-item">
              <Link to="/">Join medina-up</Link>
            </li>
            <li className="list-item">
              <Link to="/partnership">Partnership</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-section flex items-center justify-around">
        <p className="copyright">© AIESEC MEDINA - Local Support Team 2021</p>
        <span />
        <span />
        <span />
        <span />
        <span />
        <div className="right-side flex items-center">
          <div className="social-networks flex items-center">
            <a
              href="https://www.facebook.com/AIESECinTunisia5"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FACEBOOK_ICON} alt="facebook-icon" />
            </a>
            <a
              href="https://www.instagram.com/eb.wonkru/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={INSTAGRAM_ICON} alt="instagram-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTd36uIqqxRr8O23PWlgOpQ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YOUTUBE_ICON} alt="youtube-icon" />
            </a>
          </div>
          <span className="dot">•</span>
          <div className="languages flex items-center">
            <p>En</p>
            <p>Fr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
