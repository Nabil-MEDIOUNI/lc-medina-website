/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
// eslint-disable-next-line import/no-unresolved
import './index.scss';
import GTA_IMG from '../../assets/icons/Eps-blog/GTa.svg';
import GTE_IMG from '../../assets/icons/Eps-blog/GTe.svg';
import GV_IMG from '../../assets/icons/Eps-blog/GV.svg';
import LeftIcon from '../../assets/icons/arrow-left-icon.svg';
import rightIcon from '../../assets/icons/arrow-right-icon.svg';

const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <img
      onClick={onClick}
      style={{
        marginRight: '20px',
        width: '70px',
        cursor: 'pointer',
        zIndex: 100,
      }}
      src={rightIcon}
      alt="right-left"
    />
  );
};
const PrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <img
      onClick={onClick}
      style={{ marginLeft: '20px', width: '70px', cursor: 'pointer' }}
      src={LeftIcon}
      alt="left-right"
    />
  );
};
function SliderProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      <img src={GTA_IMG} alt="" />
      <img src={GTE_IMG} alt="" />
      <img src={GV_IMG} alt="" />
    </Slider>
  );
}

export default SliderProduct;
