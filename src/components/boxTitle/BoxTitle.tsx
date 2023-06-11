import React from 'react';
import './boxTitle.scss';
import './boxTitle_media.scss';

interface props {
  bgTitle: string;
  title: string;
}

const BoxTitle: React.FC<props> = ({ bgTitle, title }) => {
  return (
    <div className='container'>
      <div className='bgTitle'>{bgTitle}</div>
      <div className='aboutTitle'>{title}</div>
    </div>
  );
};

export default BoxTitle;
