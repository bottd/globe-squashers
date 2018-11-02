import React from 'react';
import flatEarth from '../../../assets/flatEarth.gif';
import './InfoPage.css';

export default function InfoPage() {
  return (
    <div className="InfoPage">
      <div className="Info-content">
        <h1 className="Info-header">About</h1>
        <p className="Info-text">
          Flat earthers face trouble due to the entire world being brainwashed
          against their belifs. I want to help give them the tools to prove
          their points. Starting with NASA's Hubble Telescope pictures, Globe
          Squashers will make data easier to access for flat earthers to help
          give them the tools to debunk NASA and other government entities.
        </p>
      </div>
      <div className="Info-content">
        <img src={flatEarth} />
      </div>
      <div className="Info-content">
        <h1 className="Info-header">How</h1>
        <p className="Info-text">
          Globe Squashers will deliver NASA Hubble Telescope images to you for
          examination. While examining a photo you can take notes and publish
          your findings for others to see. With access to everybody's findings
          you will also be able to quickly compile a mass of evidence to use as
          fuel for proving the Hubble Telescope is a hoax.
        </p>
      </div>
    </div>
  );
}
