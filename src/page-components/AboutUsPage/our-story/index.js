/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// local images:
import Photo1 from '../../../assets/images/old-AIESEC.png';
import Photo2 from '../../../assets/images/lc-medina.png';
import Photo3 from '../../../assets/images/global-village.png';
import Photo4 from '../../../assets/images/medina-up.png';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Our Story Section                              */
/* -------------------------------------------------------------------------- */
function OurStory() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="OurStory-container">
      <p className="heading">Our Story</p>
      <div className="all-stories">
        <div className="single-story flex items-center">
          <div className="story-img">
            <img src={Photo1} alt="" />
          </div>
          <div className="seperator flex flex-column items-center">
            <p className="year active-year">1948</p>
            <hr className="line" />
          </div>
          <div className="story">
            <p className="title">AIESEC was established.</p>
            <p className="description">
              AIESEC was established in 1948 after World War II, where seven
              youth across seven countries had a dream of building
              cross-cultural understanding across nations. They hoped to change
              the world, one person and one internship at a time.
            </p>
          </div>
        </div>
        <div className="single-story flex flex-reversed items-center">
          <div className="story-img">
            <img src={Photo2} alt="" />
          </div>
          <div className="seperator flex flex-column items-center">
            <p className="year">1989</p>
            <hr className="line" />
          </div>
          <div className="story text-end">
            <p className="title text-end">AIESEC MEDINA was established</p>
            <p className="description">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l&apos;imprimeriedepuis les années
              1500, quand un imprimeur anonyme assembla ensemble des morceaux de
              texte pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
        </div>
        <div className="single-story flex items-center">
          <div className="story-img">
            <img src={Photo3} alt="" />
          </div>
          <div className="seperator flex flex-column items-center">
            <p className="year">2014</p>
            <hr className="line" />
          </div>
          <div className="story text-end">
            <p className="title text-end">
              Global Village CSR Project 2014 - IHET
            </p>
            <p className="description">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l&apos;imprimeriedepuis les années
              1500, quand un imprimeur anonyme assembla ensemble des morceaux de
              texte pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
        </div>
        <div className="single-story flex-reversed flex items-center">
          <div className="story-img">
            <img src={Photo4} alt="" />
          </div>
          <div className="seperator flex flex-column items-center">
            <p className="year">2020</p>
            <hr className="line" />
          </div>
          <div className="story text-end">
            <p className="title text-end">MEDINA UP was established</p>
            <p className="description">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l&apos;imprimeriedepuis les années
              1500, quand un imprimeur anonyme assembla ensemble des morceaux de
              texte pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
