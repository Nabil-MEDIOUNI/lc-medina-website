/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';

// Page wrapper
import Layout from '../shared/Layout/index';
import Seo from '../shared/Seo/index';

// Local page components
import TopSection from '../page-components/AboutUsPage/top-section';
import WhoAreWe from '../page-components/AboutUsPage/who-are-we';
import Ourstory from '../page-components/AboutUsPage/our-story';
import DepartmentsSlider from '../page-components/AboutUsPage/departments-slider';
import PartnerSlider from '../shared/UIKit/Partnerslider';

/* -------------------------------------------------------------------------- */
/*                               About us Page                                */
/* -------------------------------------------------------------------------- */
function AboutUs() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="About us" />
      <Layout>
        <div className="about-us-page">
          <TopSection />
          <WhoAreWe />
          <Ourstory />
          <DepartmentsSlider />
          <PartnerSlider />
        </div>
      </Layout>
    </>
  );
}

export default AboutUs;
