/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import nabnab from '../../assets/images/lstPage/nabil.png';
import amal from '../../assets/images/lstPage/amal.png';
import melek from '../../assets/images/lstPage/melek.png';
import chedi from '../../assets/images/lstPage/chedi.png';
import ibrahim from '../../assets/images/lstPage/ibrahim.png';
import walid from '../../assets/images/lstPage/walid.png';
import rJarboui from '../../assets/images/lstPage/rJarboui.png';
import rBechi from '../../assets/images/lstPage/rBechi.png';

// Style
import './index.scss';
import SingleProfile from './SingleProfile';
import WannaKnowUs from './wanna-know-us';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function LST() {
  /* ---------------------------------- CONST --------------------------------- */
  const arrayLST = [
    {
      name: 'Nabil Mediouni',
      post: 'Coach',
      fbLink: 'https://www.facebook.com/nabil.mediouni.33 ',
      linkedinLink: 'www.linkedin.com',
      imgSRC: nabnab,
    },
    {
      name: 'Amal Wesleti ',
      post: 'Head Manager',
      fbLink: 'https://www.facebook.com/amal.wesleti.99 ',
      linkedinLink: 'www.linkedin.com',
      imgSRC: amal,
    },
    {
      name: 'Melek Lassoued',
      post: 'Team Leader',
      fbLink: 'https://www.facebook.com/melek.lassoued.3 ',
      linkedinLink:
        'https://www.linkedin.com/in/melek-lassoued-27a1981a8      ',
      imgSRC: melek,
    },
    {
      name: 'Chedi Guitni',
      post: 'Team Leader ',
      fbLink: 'https://www.facebook.com/chadi.guitni.3 ',
      linkedinLink: 'www.linkedin.com',
      imgSRC: chedi,
    },
    {
      name: 'Ibrahim Doghri',
      post: 'Developer',
      fbLink: 'https://www.facebook.com/Arfizato ',
      linkedinLink: 'https://www.linkedin.com/in/ibrahimdoghri/ ',
      imgSRC: ibrahim,
    },
    {
      name: 'Walid Ben Aissa',
      post: 'Developer',
      fbLink: 'https://www.facebook.com/walid.bn.aissa ',
      linkedinLink: 'www.linkedin.com',
      imgSRC: walid,
    },
    {
      name: 'Rostom Jarboui',
      post: 'Designer',
      fbLink: 'https://www.facebook.com/rostomj ',
      linkedinLink: 'www.linkedin.com ',
      imgSRC: rJarboui,
    },
    {
      name: 'Rostom Bechi',
      post: 'Designer',
      fbLink: 'https://www.facebook.com/rostomymcmb ',
      linkedinLink: 'www.linkedin.com',
      imgSRC: rBechi,
    },
  ];

  /* ******************************** RENDERING ******************************* */
  return (
    <div className="lst-page">
      <div className="textContainer">
        <div className="knowUs">
          <WannaKnowUs />
        </div>
      </div>
      <div className="subContainer rowOne">
        <SingleProfile data={arrayLST[0]} />
        <SingleProfile data={arrayLST[1]} />
        <SingleProfile data={arrayLST[2]} />
      </div>
      <div className="subContainer rowTwo">
        <SingleProfile data={arrayLST[3]} />
        <SingleProfile data={arrayLST[4]} />
        <SingleProfile data={arrayLST[5]} />
      </div>
      <div className="subContainer rowTres">
        <SingleProfile data={arrayLST[6]} />
        <SingleProfile data={arrayLST[7]} />
      </div>
    </div>
  );
}

export default LST;
