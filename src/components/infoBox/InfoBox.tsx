import React from 'react';
import './infoBox.scss';
import './infoBox_media.scss';

interface Props {
  boxTitle: string;
  boxText: string;
}

const InfoBox: React.FC<Props> = ({ boxTitle, boxText }) => {
  return (
    <div className='boxItem'>
      <div className='boxContainer'>
        <div className='boxTitle'>{boxTitle}</div>
        <div className='boxUnderLine'></div>
        <div className='text'>{boxText}</div>
      </div>
    </div>
  );
};

export default InfoBox;
