import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
      <div className='Home-title-page'>
        <div className='title-container'>
          <div className='title-box'>
            <h1 className='Home-title'>GLOBE SQUASHERS</h1>
            <p className='Home-subheader'>
              HELP PROVE THE HUBBLE TELESCOPE IS A LIE
            </p>
          </div>
          <button className='scroll-to-info'></button>
        </div>
      </div>
      <div className='Home-info-page' />
    </div>
  );
}
