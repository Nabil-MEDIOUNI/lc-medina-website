/* eslint-disable max-len */
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                         AIESEC Opportunities Section                       */
/* -------------------------------------------------------------------------- */
function AIESECGroups() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="aiesec-opps-section flex flex-column items-center">
      <p className="heading">AIESEC Groups</p>
      <div className="opps-container">
        <div className="embed-container">
          <iframe
            title="AI team"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIntTeam&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className="embed-container">
          <iframe
            title="AIESEC in Tunisia"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIESEC.Tunisia&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=330222394522140"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className="embed-container">
          <iframe
            title="AIESEC in Manouba"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIESECinTunisia5&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
        <div className="embed-container mc-nst-ceed">
          <iframe
            title="MC, NST, and CEED"
            src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F369667766848424&width=280&show_metadata=true&appId=762247648037372&height=327"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  );
}

export default AIESECGroups;
