import React from 'react';
import './mediaItem.scss';

interface Peops {
  mediaIcon: string;
  mediaName: string;
  mediaPublicedData: string;
  mediaPublicedMaterial: string;
}

const MediaItem: React.FC<Peops> = ({
  mediaIcon,
  mediaName,
  mediaPublicedData,
  mediaPublicedMaterial,
}) => {
  return (
    <div>
      <div className='mediaHeader'>
        <div className='mediaHeader_info'>
          <img
            className='mediaHeader_mediaIcon'
            src={mediaIcon}
            alt='mediaIcon'
          />
          <div className='mediaHeader_mediaName'>{mediaName}</div>
        </div>
        <button className='mediaHeader_btn' type='button'>
          FOLLOW US
        </button>
      </div>
      <div className='mediaHeader_underline'></div>
      <div className='mediaItem_content'>
        <div className='mediaItem_data'>{mediaPublicedData}</div>
        <div className='mediaItem_text'>{mediaPublicedMaterial}</div>
        <div className='mediaItem_mail'>@eduardgrigoryan960@gmail.com</div>
      </div>
    </div>
  );
};

export default MediaItem;
