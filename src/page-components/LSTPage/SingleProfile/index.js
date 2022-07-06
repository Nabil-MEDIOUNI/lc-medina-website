/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Local images
import fbImg from '../../../assets/icons/facebook-icon.svg';
import linkedinImg from '../../../assets/icons/linkedin-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function SingleProfile({ data }) {
  const { imgSRC, name, post, fbLink, linkedinLink } = data;
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <div className="lst-single-profile">
        <img className="profilePic" alt="" src={imgSRC} />
        <div className="linearGradientDiv" />
        <div className="contentContainer">
          <p className="profileName">{name}</p>
          <p className="profilePost">{post}</p>
          <div className="linkContainer">
            <a
              href={fbLink}
              target="_blank"
              className="socialMediaLink fbIcon"
              rel="noreferrer"
            >
              <img src={fbImg} alt="" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              className="socialMediaLink"
              rel="noreferrer"
            >
              <img src={linkedinImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

SingleProfile.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    post: PropTypes.string,
    fbLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    imgSRC: PropTypes.string,
  }).isRequired,
};
export default SingleProfile;
