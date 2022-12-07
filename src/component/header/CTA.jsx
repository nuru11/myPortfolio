import React from 'react';
import CV from '../../assets/cover-letter_resume.PDF';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        download my resume
      </a>
      <a href="#contact" className="btn btn-primary">
        lets talk
      </a>
    </div>
  );
};

export default CTA;
