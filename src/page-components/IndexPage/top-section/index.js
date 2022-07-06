/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import { Link } from 'gatsby';
import React from 'react';

// Local images

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                Top Section                                 */
/* -------------------------------------------------------------------------- */
function TopSection() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="landing-banner">
      <div className="banner-bg" />
      <div className="top-section">
        <div className="content">
          <div className="badge flex items-center">
            <p>Life changing expreriences</p>
            <img
              className="emoji"
              alt="📍"
              src="https://s.w.org/images/core/emoji/13.1.0/svg/1f4cd.svg"
            />
          </div>
          <p className="title">We are a youth leadership movement</p>
          <p className="description">
            AIESEC in Manouba is a Local Committee, located at the Higher School
            of Commerce of Tunis - University of Manouba. This organization is
            an opportunity for young people to develop their leadership
            potential through international internships and volunteering
            opportunities. It was founded in 1989 and is a non-profit,
            non-governmental organization entirely run by young people for young
            people.
          </p>
          <div className="buttons">
            <Link to="about-us">
              <button className="about-btn" type="button">
                About MEDINA
              </button>
            </Link>
            <Link to="/partnership">
              <button className="partner-btn" type="button">
                Join as Partner
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="wave" /> */}
    </div>
  );
}

export default TopSection;
