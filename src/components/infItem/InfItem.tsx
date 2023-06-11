import React from 'react';
import './infItem.scss';
import './infItem_media.scss';

interface props {
  src: string;
  content: string;
  description: string;
}

const InfItem: React.FC<props> = ({ src, content, description }) => {
  return (
    <div className='info'>
      <img src={src} alt={src} />
      <div className='content'>{content}</div>
      <div className='description'>{description}</div>
    </div>
  );
};

export default InfItem;
