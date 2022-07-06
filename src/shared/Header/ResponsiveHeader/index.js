/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'gatsby';

// Local images
import Logo from '../../../assets/medina-logo.png';
import MENU_ICON from '../../../assets/icons/menu-icon.svg';
import WHITE_MENU_ICON from '../../../assets/icons/menu-white.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                         Responsive Header Component                        */
/* -------------------------------------------------------------------------- */
function ResponsiveHeader({ whiteLink }) {
  /* ******************************** HOOKS ******************************* */
  const [isScrolled, setPageScrolling] = useState(false);
  const IS_BROWSER = typeof window !== 'undefined';
  useEffect(() => {
    if (IS_BROWSER) {
      const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 10) setPageScrolling(true);
        if (e.target.documentElement.scrollTop <= 9) setPageScrolling(false);
      };
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
    return '';
  }, [IS_BROWSER]);
  /* ****************************** RENDER HELPERS **************************** */
  /* ******************************** RENDERING ******************************* */
  return (
    <header className={`responsive-navbar ${isScrolled && 'active-navbar'}`}>
      <img className="logo" src={Logo} alt="logo" />
      <div className="menu">
        {!isScrolled && whiteLink && (
          <img
            className="menu-icon"
            src={WHITE_MENU_ICON}
            alt="change language"
          />
        )}
        {(isScrolled || !whiteLink) && (
          <img className="menu-icon" src={MENU_ICON} alt="change language" />
        )}
      </div>
      {/* <nav className="nav-content">
        <ul className="list">
          <li className="list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/about-us">
              About us
            </Link>
            <ul className="collapse-list">
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Our Departments
                </Link>
              </li>
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Financial Statements
                </Link>
              </li>
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Our Partners
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link className="link" to="/">
              Our products
            </Link>
            <ul className="collapse-list">
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Global Volunteer
                </Link>
              </li>
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Global Talent
                </Link>
              </li>
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Global Teacher
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link className="link" to="/">
              Our blog
            </Link>
            <ul className="collapse-list">
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Young people
                </Link>
              </li>
              <li className="collapse-item">
                <Link className="collapse-link" to="/about-us">
                  Business
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-item">
            <Link className="link" to="/">
              Global Home
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/partnership">
              Partnership
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

ResponsiveHeader.defaultProps = {
  whiteLink: false,
};

ResponsiveHeader.propTypes = {
  whiteLink: PropTypes.bool,
};

export default ResponsiveHeader;
