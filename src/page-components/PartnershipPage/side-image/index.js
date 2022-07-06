/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { Link } from 'gatsby';

// Local images
import Logo from '../../../assets/medina-logo.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Side Image Component                             */
/* -------------------------------------------------------------------------- */

function SideImage() {
  return (
    <div id="side-image">
      <Link to="/">
        <img className="side-logo" src={Logo} alt="logo" />
      </Link>
      <div className="gradient" />
      <div className="sidetext">
        <span>
          Have you thought about connecting and recruiting young national or
          international talent for your company?
        </span>
        <p>
          AIESEC is a global network that can connect your brand to young
          national and international talents from different areas, such as:
          Marketing, Customer Service, Sales, Design and others.
        </p>
        <p>
          With us, you can expand your focus on generating diversity and
          results, through expansion and global positioning.
        </p>
        <p>
          Schedule a conversation with us and understand how a more globalized,
          international and innovative work environment is just a step away and
          simpler than you might think.
        </p>
      </div>
    </div>
  );
}

export default SideImage;
