/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Page wrappers
import Header from '../Header';
import Footer from '../Footer';

// local Images
import ARROW_UP from '../../assets/icons/arrow-top.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Layout Component                                 */
/* -------------------------------------------------------------------------- */
const Layout = ({ children, whiteLink }) => {
  /* ********************************** HOOKS ********************************* */
  const [scrollY, setPageScrolling] = useState(0);
  const IS_BROWSER = typeof window !== 'undefined';
  useEffect(() => {
    if (IS_BROWSER) {
      const onScroll = (e) => {
        setPageScrolling(e.target.documentElement.scrollTop);
      };
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
    return '';
  }, [IS_BROWSER]);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /* ***************************** RENDER HELPERS ***************************** */
  function getBackToTopBtn() {
    if (scrollY > 200) {
      return (
        <button className="back-to-top" type="button" onClick={topFunction}>
          <img src={ARROW_UP} alt="back to top" />
        </button>
      );
    }
    return '';
  }

  /* ******************************** RENDERING ******************************* */
  return (
    <div className="page-layout">
      <Header whiteLink={whiteLink} />
      {getBackToTopBtn()}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  whiteLink: PropTypes.bool,
};

Layout.defaultProps = {
  whiteLink: false,
};

export default Layout;
