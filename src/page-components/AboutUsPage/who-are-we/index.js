/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { Container } from 'react-grid-system';

// Local images
import AIESEC_IMG from '../../../assets/images/AIESEC.png';
import ALQ_IMG from '../../../assets/images/AIESEC-Leadership-Qualities.png';
import MEDINA_IMG from '../../../assets/images/medina.png';
import WAVE_IMG from '../../../assets/images/wave.png';
import LC_MEDINA_IMG from '../../../assets/images/lc-medina.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function WhoAreWe() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="who-are-we">
      <div className="section-1" data-aos="fade-right">
        <div className="left-side">
          <img className="aiesec-img" src={AIESEC_IMG} alt="" />
          <img className="alq-img" src={ALQ_IMG} alt="" />
        </div>
        <div className="right-side">
          <p className="what-we-do">We develop youth leaders</p>
          <p className="description">
            We believe that youth are the key to shaping a better future.
            Through our experiences we strive to develop youth leaders with the
            AIESEC Leadership Qualities.
          </p>
          <div className="all-counters">
            <Container className="double-counters flex items-center">
              <div className="single-counter">
                <span className="count">+20</span>
                <p className="title">Partner Organizations</p>
              </div>
              <div className="single-counter">
                <span className="count">+20</span>
                <p className="title">Countries & Territoriess</p>
              </div>
            </Container>
            <Container className="double-counters flex items-center">
              <div className="single-counter">
                <span className="count">+500</span>
                <p className="title">Experience every year</p>
              </div>
              <div className="single-counter">
                <span className="count">+30.000</span>
                <p className="title">Student within campus</p>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="section-2" data-aos="fade-left">
        <div className="left-side">
          <p className="what-we-do">What is AIESEC MEDINA?</p>
          <p className="description">
            AIESEC in Manouba is a Local Committee, located at the Higher School
            of Commerce of Tunis - University of Manouba. This organization is
            an opportunity for young people to develop their leadership
            potential through international internships and volunteering
            opportunities. It was founded in 1989 and is a non-profit,
            non-governmental organization entirely run by young people for young
            people.
          </p>
          <div className="play-video-btn flex items-center">
            <a
              className="video-play-button"
              target="_blank"
              href="https://www.youtube.com/watch?v=mcFp9coQpMY&ab_channel=FindLyrics"
              rel="noreferrer"
            >
              <span />
            </a>
            <div className="watch_video">
              <h5>Listen to MEDINA&apos;s song</h5>
              <p>You will love our execution</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img className="medina-img" src={LC_MEDINA_IMG} alt="" />
          <img className="medina_1-img" src={MEDINA_IMG} alt="" />
        </div>
      </div>
      <img className="wave-img" src={WAVE_IMG} alt="" />
    </div>
  );
}

export default WhoAreWe;
