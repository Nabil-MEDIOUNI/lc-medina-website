/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function SeeMoreButton() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="Button">
      <a
        href="http://localhost:8000/events-blog"
        target="_blank"
        className="textBox"
        rel="noreferrer"
      >
        SEE MORE
      </a>
    </div>
  );
}

export default SeeMoreButton;
