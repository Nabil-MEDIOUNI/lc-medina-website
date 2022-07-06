/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Each individual Article                        */
/* -------------------------------------------------------------------------- */
function EventsArticle({ data }) {
  const {
    eventImg,
    title,
    subtitle,
    description,
    readMoreLink,
    secondaryColor,
  } = data;
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="ArticleInnerBox">
      <div className="ImgBox">
        <img src={eventImg} alt="event waw" />
      </div>
      <div className="textBox">
        <div className="Title">{title}</div>
        <div className="Subtitle" style={secondaryColor}>
          {subtitle}
        </div>
        <div className="Description" id="Scrollable">
          {description}
        </div>
        <div className="ReadMore">
          <a
            target="_blank"
            rel="noreferrer"
            href={readMoreLink}
            style={secondaryColor}
          >
            Read More ❯
          </a>
        </div>
      </div>
    </div>
  );
}

EventsArticle.propTypes = {
  data: PropTypes.objectOf({
    eventImg: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    readMoreLink: PropTypes.string,
    secondaryColor: PropTypes.string,
  }).isRequired,
};
export default EventsArticle;
