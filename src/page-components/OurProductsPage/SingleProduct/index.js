/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import { Container } from 'react-grid-system';

// Local images
import WAVE_IMG from '../../../assets/images/wave.png';

import STEP1 from '../../../assets/icons/our-products/step1.png';
import STEP2 from '../../../assets/icons/our-products/step2.png';
import STEP3 from '../../../assets/icons/our-products/step3.png';
import STEP4 from '../../../assets/icons/our-products/step4.png';

// local UI Compoenents
import Building from '../Building';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function SingleProduct({
  PRODUCT_IMG,
  IMG1,
  IMG2,
  IMG3,
  oppsBtn,
  palette,
  building,
}) {
  /* ******************************** RENDERING ******************************* */

  return (
    <div className="single-product-page">
      <div className="single-product-banner">
        <section>
          <div className="wave" />
        </section>
        <div className="product-img">
          <img src={PRODUCT_IMG} alt="" />
        </div>
      </div>

      <div className="product-3d">
        <Canvas>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <mesh position={[-8, -5, 0]}>
              <Building building={building} />
            </mesh>
          </Suspense>
          <OrbitControls
            position={[10, -5, 3]}
            autoRotate={false}
            zoom0={10}
            maxPolarAngle={Math.PI / 8 - 1}
            minPolarAngle={Math.PI / 2 - 1}
            enablePan
            onWheel={(e) => console.log(e)}
          />
        </Canvas>
      </div>

      <div className="product-description">
        <Container className="top-section flex items-baseline">
          <Container className="left-section">
            <p className="title">Developing people by impacting the world</p>
            <p className="description top">
              Cross-cultural volunteer experience for young people who seek to
              develop themselves and contribute to the Sustainable Development
              Goals.
            </p>
            <div className="numeric-detail top">
              <span className={palette}>+20</span>
              <p>Countries covered</p>
            </div>
            <div className="numeric-detail top">
              <span className={palette}>+20</span>
              <p>Last year experiences</p>
            </div>
            <div className="numeric-detail top">
              <span className={palette}>+20</span>
              <p>Positions opened</p>
            </div>
          </Container>
          <Container>
            <Container className="right-side flex">
              <div className="single-detail">
                <img src={IMG1} alt="" />
                <p className="title top">Experience new cultures</p>
                <p className="description top">
                  There&apos;s nothing quite like being in a brand new country,
                  living and volunteering with people from all around. Imagine
                  the things you&apos;d learn!
                </p>
              </div>
              <div className="single-detail">
                <img src={IMG2} alt="" />
                <p className="title top">Make your impact</p>
                <p className="description top">
                  You can make a difference in the world, it starts with that
                  first step. Contribute towards the Sustainable Development
                  Goals and tackle the issues you&apos;re most passionate about.
                </p>
              </div>
            </Container>
            <Container className="right-side">
              <div className="single-detail">
                <img src={IMG3} alt="" />
                <p className="title top">
                  Push yourself out of your comfort zone
                </p>
                <p className="description top">
                  If you don&apos;t try and experience new things, you&apos;ll
                  never find your full potential. Challenge yourself and
                  discover the best version of you.
                </p>
              </div>
            </Container>
          </Container>
        </Container>

        <Container className="bottom-section flex items-baseline">
          <Container className="left-side">
            <p className="title">Internship Pricing</p>
            <p className="description top">
              AIESEC is run by students, for students. We are a non-profit
              organisation and we do everything we can to make our projects as
              affordable as possible. The small fee the EP pay serves to cover
              our operational costs.
            </p>
            <div className="contract-details top">
              <p className={`header ${palette}`}>Contract Price:</p>
              <p className={`price ${palette}`}>165 Dt</p>
              <p className="duration">Global Volunteer (6 weeks)</p>
            </div>
          </Container>
          <Container className="right-side">
            <p className="title">EP should know:</p>
            <ul className="top">
              <li>Signing up & applying is free</li>
              <li>EP only pay once He/She have been accepted for a project</li>
              <li>
                Housing and food is often provided and covered. This is clearly
                stated per opportunity on our opportunities portal
              </li>
              <li>
                EP is supported from start to finish by AIESEC in Manouba and
                AIESEC abroad.
              </li>
            </ul>
          </Container>
        </Container>
        <div className={`search-opportunities ${palette}`}>
          <img className="wave-img" src={WAVE_IMG} alt="" />
          <button className={`search ${palette}`} type="button">
            {`SEARCH ${oppsBtn} OPPOTUNITIES`}
          </button>
        </div>
      </div>

      <div className="all-steps">
        <div className="OurStory-container">
          <p className="heading">All Steps EP Should do</p>
          <div className="all-stories">
            <div className="single-story flex items-center">
              <div className="story-img">
                <img
                  src={STEP1}
                  alt=""
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="seperator flex flex-column items-center">
                <p className="year active-year">01</p>
                <hr className="line" />
              </div>
              <div className="story">
                <p className="title">Sign Up</p>
                <p className="description">
                  Create an account on our platform and fill in all the details
                  on your profile.
                </p>
              </div>
            </div>
            <div className="single-story flex flex-reversed items-center">
              <div className="story-img">
                <img
                  src={STEP2}
                  alt=""
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="seperator flex flex-column items-center">
                <p className="year">02</p>
                <hr className="line" />
              </div>
              <div className="story text-end">
                <p className="title text-end">Find a project</p>
                <p className="description">
                  Use the filters in our search page and find the projects that
                  you are most interested in.
                </p>
              </div>
            </div>
            <div className="single-story flex items-center">
              <div className="story-img">
                <img
                  src={STEP3}
                  alt=""
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="seperator flex flex-column items-center">
                <p className="year">03</p>
                <hr className="line" />
              </div>
              <div className="story text-end">
                <p className="title text-end">
                  Go through the selection process
                </p>
                <p className="description">
                  After you apply for a project you will be contacted by us and
                  receive information on the selection process.
                </p>
              </div>
            </div>
            <div className="single-story flex-reversed flex items-center">
              <div className="story-img">
                <img
                  src={STEP4}
                  alt=""
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              <div className="seperator flex flex-column items-center">
                <p className="year">04</p>
                <hr className="line" />
              </div>
              <div className="story text-end">
                <p className="title text-end">Get ready</p>
                <p className="description">
                  Once you’re selected, it’s time to pack your bags and prepare
                  all the logistic - don’t worry we’ll be there to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  PRODUCT_IMG: PropTypes.string.isRequired,
  IMG1: PropTypes.string.isRequired,
  IMG2: PropTypes.string.isRequired,
  IMG3: PropTypes.string.isRequired,
  oppsBtn: PropTypes.string.isRequired,
  palette: PropTypes.string.isRequired,
  building: PropTypes.string.isRequired,
};

export default SingleProduct;
