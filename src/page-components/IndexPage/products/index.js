/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import GV_ICON from '../../../assets/icons/our-products/gv/gv.svg';
import GTE_ICON from '../../../assets/icons/our-products/gte/gte.svg';
import GTA_ICON from '../../../assets/icons/our-products/gta/gta.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                Products Section                            */
/* -------------------------------------------------------------------------- */
function ProductsSection() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="products-section flex flex-column items-center">
      <p className="heading">
        How do exchange program participants choose to develop themselves?
      </p>
      <div className="all-products flex items-center">
        <div className="single-product gv">
          <img src={GV_ICON} alt="gv-icon" />
          <p className="description">
            Ambitious enough to believe you can make a positive impact in our
            world? Well, we believe you can, through volunteering towards the UN
            Global Goals!
          </p>
          <p className="weeks">6-12 weeks</p>
        </div>
        <div className="single-product gte">
          <img src={GTE_ICON} alt="gte-icon" />
          <p className="description">
            Develop your leadership while boosting your career prospects with an
            opportunity to work as a teacher abroad!
          </p>
          <p className="weeks">6-78 weeks</p>
        </div>
        <div className="single-product gta">
          <img src={GTA_ICON} alt="gta-icon" />
          <p className="description">
            Searching for the next opportunity to level yourself up and gain
            professional experience? Differentiate yourself through an
            international internship.
          </p>
          <p className="weeks">6-78 weeks</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
