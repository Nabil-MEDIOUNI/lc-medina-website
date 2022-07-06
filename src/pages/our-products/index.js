/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Router as MyRouter } from '@reach/router';

// Page wrapper
import Layout from '../../shared/Layout/index';
import Seo from '../../shared/Seo/index';
import SingleProduct from '../../page-components/OurProductsPage/SingleProduct';

// Local page components
// gv images
import GV_IMG from '../../assets/icons/our-products/gv/gv.svg';
import GV_IMG1 from '../../assets/icons/our-products/gv/Icons.svg';
import GV_IMG2 from '../../assets/icons/our-products/gv/Icons1.svg';
import GV_IMG3 from '../../assets/icons/our-products/gv/Icons2.svg';
// gta images
import GTA_IMG from '../../assets/icons/our-products/gta/gta.svg';
import GTA_IMG1 from '../../assets/icons/our-products/gta/Icons.svg';
import GTA_IMG2 from '../../assets/icons/our-products/gta/Icons1.svg';
import GTA_IMG3 from '../../assets/icons/our-products/gta/Icons2.svg';
// gte images
import GTE_IMG from '../../assets/icons/our-products/gte/gte.svg';
import GTE_IMG1 from '../../assets/icons/our-products/gte/Icons.svg';
import GTE_IMG2 from '../../assets/icons/our-products/gte/Icons1.svg';
import GTE_IMG3 from '../../assets/icons/our-products/gte/Icons2.svg';

/* -------------------------------------------------------------------------- */
/*                               About us Page                                */
/* -------------------------------------------------------------------------- */
function OurProducts({ location }) {
  /* ********************************** HOOKS ********************************* */
  const [getPathname, setPathname] = useState('gv');
  useEffect(() => {
    const pathname = location.pathname.split('/')[2];
    if (pathname === 'global-volunteer') {
      setPathname('gv');
    }
    if (pathname === 'global-talent') {
      setPathname('gta');
    }
    if (pathname === 'global-teacher') {
      setPathname('gte');
    }
  }, [location]);
  /* ***************************** RENDERING HELPERS ************************** */
  function getColorPalette() {
    if (getPathname === 'gv') return 'gv_color';
    if (getPathname === 'gta') return 'gta_color';
    return 'gte_color';
  }
  function getSingleProduct() {
    if (getPathname === 'gv') {
      return (
        <SingleProduct
          path="/our-products/global-volunteer"
          PRODUCT_IMG={GV_IMG}
          IMG1={GV_IMG1}
          IMG2={GV_IMG2}
          IMG3={GV_IMG3}
          oppsBtn="GV"
          palette={getColorPalette()}
          building="/gv_3d.glb"
        />
      );
    }
    if (getPathname === 'gta') {
      return (
        <SingleProduct
          path="/our-products/global-talent"
          PRODUCT_IMG={GTA_IMG}
          IMG1={GTA_IMG1}
          IMG2={GTA_IMG2}
          IMG3={GTA_IMG3}
          oppsBtn="GTA"
          palette={getColorPalette()}
          building="/gt.glb"
        />
      );
    }
    return (
      <SingleProduct
        path="/our-products/global-teacher"
        PRODUCT_IMG={GTE_IMG}
        IMG1={GTE_IMG1}
        IMG2={GTE_IMG2}
        IMG3={GTE_IMG3}
        oppsBtn="GTE"
        palette={getColorPalette()}
        building="/tt.glb"
      />
    );
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="About us" />
      <Layout whiteLink>
        <MyRouter>{getSingleProduct()}</MyRouter>
      </Layout>
    </>
  );
}

OurProducts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default OurProducts;
