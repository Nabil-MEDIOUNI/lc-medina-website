/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Hidden } from 'react-grid-system';

import { Link } from 'gatsby';

import ResponsiveHeader from './ResponsiveHeader';

// Local images
import Logo from '../../assets/medina-logo.png';
import Globe from '../../assets/icons/earth-icon.svg';
import GLOBE_WHITE from '../../assets/icons/white-earth-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Header Component                                 */
/* -------------------------------------------------------------------------- */
function Header({ whiteLink }) {
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
  function getHeader() {
    return (
      <header className={`navbar ${isScrolled && 'active-navbar'}`}>
        <img className="logo" src={Logo} alt="logo" />
        <nav className="nav-content">
          <ul className="list">
            <li className="list-item">
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/about-us"
              >
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
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/about-us"
              >
                Our products
              </Link>
              <ul className="collapse-list">
                <li className="collapse-item">
                  <Link
                    className="collapse-link"
                    to="/our-products/global-volunteer"
                  >
                    Global Volunteer
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link
                    className="collapse-link"
                    to="/our-products/global-talent"
                  >
                    Global Talent
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link
                    className="collapse-link"
                    to="/our-products/global-teacher"
                  >
                    Global Teacher
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/"
              >
                Our blog
              </Link>
              <ul className="collapse-list">
                <li className="collapse-item">
                  <Link className="collapse-link" to="/eps-blog">
                    Young people
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/events-blog">
                    Business
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/"
              >
                Global Home
              </Link>
            </li>
            <li className="list-item">
              <Link
                className={`link ${!isScrolled && whiteLink && 'white-link'}`}
                to="/partnership"
              >
                Partnership
              </Link>
            </li>
          </ul>
          <div className="translation">
            {!isScrolled && whiteLink && (
              <img
                className="translation-img"
                src={GLOBE_WHITE}
                alt="change language"
              />
            )}
            {(isScrolled || !whiteLink) && (
              <img
                className="translation-img"
                src={Globe}
                alt="change language"
              />
            )}
          </div>
        </nav>
      </header>
    );
  }
  function getResponsiveHeader() {
    return <ResponsiveHeader whiteLink={whiteLink} />;
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Hidden md xs sm>
        {getHeader()}
      </Hidden>
      <Hidden lg xl xxl>
        {getResponsiveHeader()}
      </Hidden>
    </>
  );
}

Header.defaultProps = {
  whiteLink: false,
};

Header.propTypes = {
  whiteLink: PropTypes.bool,
};

export default Header;
