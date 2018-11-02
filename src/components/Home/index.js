import React from 'react';
import {NavLink} from 'react-router-dom';
import InfoPage from './components/InfoPage';
import './Home.css';

export default function Home() {
  const smoothScroll = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.body.scrollHeight,
    });
  };

  return (
    <div className="Home">
      <div className="Home-title-page">
        <div className="title-container">
          <div className="title-box">
            <h1 className="Home-title">GLOBE SQUASHERS</h1>
            <p className="Home-subheader">
              HELP PROVE THE HUBBLE TELESCOPE IS A LIE
            </p>
          </div>
          <div className="button-wrapper">
            <button className="scroll-to-info" onClick={smoothScroll}>
              <p className="button-header">MORE INFO</p>
              <i className="fas fa-caret-down" />
            </button>
          </div>
        </div>
      </div>
      <InfoPage />
    </div>
  );
}
