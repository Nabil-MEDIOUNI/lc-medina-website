/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';

// UI lib comoponents

// Local UI components
import PartnerImg from '../../../assets/images/partner.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PartnerSlider() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div id="slider-main">
      <h2>Our premium partners</h2>
      <p>
        Employers, higher education institutions and like-minded organizations
        have partnered with us since AIESEC in Manouba was founded in 1989.
      </p>
      <div id="slider">
        <div>
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
        </div>
        <div>
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
        </div>
        <div>
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
          <img src={PartnerImg} alt="partner1" />
          <img src={PartnerImg} alt="partner2" />
          <img src={PartnerImg} alt="partner3" />
          <img src={PartnerImg} alt="partner4" />
        </div>
      </div>
    </div>
  );
}

export default PartnerSlider;
