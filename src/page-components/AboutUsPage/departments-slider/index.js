/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import Slider from 'react-slick';
import { useScreenClass } from 'react-grid-system';

// Local images
import IM_IMG from '../../../assets/images/im-department.png';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Departments Slider                             */
/* -------------------------------------------------------------------------- */
function DepartmentsSlider() {
  /* ******************************** CONSTANTS ******************************* */
  const screenClass = useScreenClass();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    customPaging() {
      return <div className="dot-icon" />;
    },
    speed: 500,
    slidesToShow: ['xs', 'sm', 'md'].includes(screenClass) ? 1 : 3,
    slidesToScroll: 1,
  };

  /* ******************************** RENDERING ******************************* */
  return (
    <div className="departments-slider">
      <section>
        <div className="wave" />
      </section>
      <p className="heading">Our Departments</p>
      <Slider {...settings}>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default DepartmentsSlider;
