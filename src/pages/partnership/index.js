/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Page wrappers
import Seo from '../../shared/Seo';

// local UI components
import FormSection from '../../page-components/PartnershipPage/form-section';
import SideImage from '../../page-components/PartnershipPage/side-image';

// Local images
import Globe from '../../assets/icons/earth-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            Partnership Page                                */
/* -------------------------------------------------------------------------- */

function PartnershipPage() {
  return (
    <>
      <Seo title="Partnership" />
      <div id="partnership-page">
        <img src={Globe} alt="change language" className="change-language" />
        <SideImage />
        <FormSection />
      </div>
    </>
  );
}

export default PartnershipPage;
