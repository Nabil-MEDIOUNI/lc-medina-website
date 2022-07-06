/* eslint-disable no-useless-concat */
/* eslint-disable max-len */
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import event1 from '../../assets/images/eventsBlogPage/event1.jpg';
import event2 from '../../assets/images/eventsBlogPage/event2.jpg';
import event3 from '../../assets/images/eventsBlogPage/event3.jpg';

// Style
import './index.scss';
import EventsBanner from './eventsBanner';
import EventsSlider from './eventsSlider';
import EventsArticle from './eventsArticle';
import SeeMoreButton from './seeMoreButton';

/* -------------------------------------------------------------------------- */
/*                             NIK ZEBI                                       */
/* -------------------------------------------------------------------------- */
function EventsBlogPage() {
  /* ---------------------------------- CONST --------------------------------- */
  const dataArray = [
    {
      eventImg: event1,
      title: 'Lorem ipsum',
      subtitle: ' dolor sit amet ',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.',
      readMoreLink: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
      secondaryColor: { color: '#037Ef3' },
    },
    {
      eventImg: event2,
      title: 'Lorem ipsum',
      subtitle: ' dolor sit amet ',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.' +
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.',
      readMoreLink: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
      secondaryColor: { color: '#037Ef3' }, // '#F85A40'
    },
    {
      eventImg: event3,
      title: 'Lorem ipsum',
      subtitle: ' dolor sit amet ',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.' +
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis qui repellat officia optio quibusdam cumque.',
      readMoreLink: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
      secondaryColor: { color: '#037Ef3' }, // '#30C39E'
    },
  ];
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="EventsBlogPage">
      <div className="BannerBox">
        <EventsBanner />
      </div>
      <div className="SliderBox">
        <EventsSlider />
      </div>
      <div className="ArticleBox">
        <div className="ArticleRow">
          <div className="ArticleTitle">Events Articles</div>
        </div>
        <div className="ArticleRow">
          <EventsArticle className="singleBox" data={dataArray[0]} />
          <EventsArticle className="singleBox" data={dataArray[0]} />
          <EventsArticle className="singleBox" data={dataArray[0]} />
        </div>
        <div className="ArticleRow">
          <EventsArticle className="singleBox" data={dataArray[1]} />
          <EventsArticle className="singleBox" data={dataArray[1]} />
          <EventsArticle className="singleBox" data={dataArray[1]} />
        </div>
        <div className="ArticleRow">
          <EventsArticle className="singleBox" data={dataArray[2]} />
          <EventsArticle className="singleBox" data={dataArray[2]} />
          <EventsArticle className="singleBox" data={dataArray[2]} />
        </div>
      </div>
      <div className="ButtonBox">
        <SeeMoreButton />
      </div>
    </div>
  );
}

export default EventsBlogPage;
