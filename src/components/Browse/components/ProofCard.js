import React from 'react';

export default function ProofCard({url, title, note}) {
  return (
    <div className="ProofCard">
      <h3>{title}</h3>
      <img src={url} />
      <p>{note}</p>
    </div>
  );
}
