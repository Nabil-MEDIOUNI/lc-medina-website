/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';

// Page wrapper
import Layout from '../shared/Layout';
import Seo from '../shared/Seo/index';

// local UI component
import LST from '../page-components/LSTPage';

/* -------------------------------------------------------------------------- */
/*                                 LST Page                                   */
/* -------------------------------------------------------------------------- */
function LSTPage() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="LST" />
      <Layout>
        <LST />
      </Layout>
    </>
  );
}

export default LSTPage;
