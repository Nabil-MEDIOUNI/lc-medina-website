/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import IMG_1 from '../../../assets/images/how-it-works/1.png';
import IMG_2 from '../../../assets/images/how-it-works/2.png';
import IMG_3 from '../../../assets/images/how-it-works/3.png';
import IMG_4 from '../../../assets/images/how-it-works/4.png';
import IMG_5 from '../../../assets/images/how-it-works/5.png';
import ABOUT_AIESEC_IMG from '../../../assets/images/how-it-works/about-aiesec.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             How it works Section                           */
/* -------------------------------------------------------------------------- */
function HowItWorksSection() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="how-it-works-section flex flex-column items-center">
      <p className="heading">How it works?</p>
      <div className="how-container">
        <div className="all-hows flex items-baseline justify-center">
          <div className="single-how flex flex-column items-center">
            <img src={IMG_1} alt="" />
            <p className="title">SEARCH</p>
            <p className="description">
              Find the opportunity that matches the EP
            </p>
          </div>
          <div className="single-how flex flex-column items-center">
            <img src={IMG_2} alt="" />
            <p className="title">APPLY</p>
            <p className="description">
              Fill out the signup form, fill out EPs profile and apply for
              opportunities
            </p>
          </div>
          <div className="single-how flex flex-column items-center">
            <img src={IMG_3} alt="" />
            <p className="title">SELECTION</p>
            <p className="description">
              EP will be contacted by the opportunity manager to clarify all
              details
            </p>
          </div>
          <div className="single-how flex flex-column items-center">
            <img src={IMG_4} alt="" />
            <p className="title">APPROVED</p>
            <p className="description">
              If the EP pass the selection, the next step is to pay and become
              approved!
            </p>
          </div>
          <div className="single-how flex flex-column items-center">
            <img src={IMG_5} alt="" />
            <p className="title">GO!</p>
            <p className="description">
              AIESEC Supports the EP before, during and after the exchange
            </p>
          </div>
        </div>
        <div className="about-aiesec flex items-center justify-around">
          <img src={ABOUT_AIESEC_IMG} alt="" />
          <div className="intro">
            <p className="title">ABOUT AIESEC</p>
            <p className="description">
              AIESEC was founded in 1948 in 7 countries in Europe to prevent
              similar conflicts as World War II. Now, more than 68 years later,
              we are present in over 126 countries and territories and still
              growing providing culture exchange programs for youth.
            </p>
          </div>
        </div>
        <div className="details flex items-baseline">
          <div className="single-detail">
            <p className="title">EXPERIENCE</p>
            <p className="description">
              Since 1948, AIESEC has promoted cultural exchange. Since then we
              have helped thousands of young people live a unique experience
              abroad.
            </p>
          </div>
          <div className="single-detail">
            <p className="title">FOR YOUTH, BY YOUTH</p>
            <p className="description">
              AIESEC is a youth-led organization for youth. We offer the
              opportunity to get to know other young people with different
              cultural backgrounds, to live with them and to work.
            </p>
          </div>
          <div className="single-detail">
            <p className="title">SOCIAL IMPACT</p>
            <p className="description">
              For those who want to get involved socially and want to work with
              the local chapters on their projects, AIESEC offers an easy way to
              find a suitable project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
