/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';

// Page wrapper
import Layout from '../shared/Layout';
import Seo from '../shared/Seo/index';

// local UI component
import EventsBlogPage from '../page-components/eventsBlogPage';

/* -------------------------------------------------------------------------- */
/*                                 EVENTS BLOG PAGE                           */
/* -------------------------------------------------------------------------- */
function eventsBlog() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="Events Blog" />
      <Layout>
        <EventsBlogPage />
      </Layout>
    </>
  );
}

export default eventsBlog;
