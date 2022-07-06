/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import banner from '../../../assets/images/eventsBlogPage/banner.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function EventsBanner() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="BannerBox">
      <span className="ImageBox">
        <img src={banner} alt="aiesec conference" />
      </span>
      <div className="Title">Events Blog</div>
    </div>
  );
}

export default EventsBanner;
