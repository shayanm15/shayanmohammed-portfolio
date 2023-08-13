import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">My <span>Contact Information</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.emailIcon} alt="email" />
          <a href="mailto:shayanmohammed0@gmail.com" className="p-text">shayanmohammed0@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.phoneIcon} alt="phone" />
          <a href="tel:+1 (905) 699-9786" className="p-text">+1 (905) 699-9786</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);