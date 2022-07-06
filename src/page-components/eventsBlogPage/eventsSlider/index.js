/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import Slider from 'react-slick';

// Local images
import event1 from '../../../assets/images/eventsBlogPage/MBF2.jpg';
import event2 from '../../../assets/images/eventsBlogPage/MBF1.jpg';
import event3 from '../../../assets/images/eventsBlogPage/YSF.jpg';
import event4 from '../../../assets/images/eventsBlogPage/YSF1.jpg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             EVENT SLIDER                                   */
/* -------------------------------------------------------------------------- */
function EventsSlider() {
  // render() {}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="SliderContainer">
      {/* <h2> Multiple items </h2> */}
      <div className="OurEventsH2">OUR EVENTS - OUR EVENTS -OUR EVENTS</div>
      <Slider {...settings} className="Slider">
        <div>
          <img src={event1} alt="" />
        </div>
        <div>
          <img src={event2} alt="" />
        </div>
        <div>
          <img src={event3} alt="" />
        </div>
        <div>
          <img src={event4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default EventsSlider;
