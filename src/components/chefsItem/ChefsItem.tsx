import React from 'react';
import './chefsItem.scss';
import './chefsItem_media.scss';

interface props {
  chefs_id: number;
  chefs_src: string;
  chefs_name: string;
  chefs_info: string;
}

const ChefsItem: React.FC<props> = ({ chefs_src, chefs_name, chefs_info }) => {
  return (
    <div className='chefsItem'>
      <img src={chefs_src} className='chef_img' alt='chef' />
      <div className='chefs_info_box'>
        <div className='chefs_name'>{chefs_name}</div>
        <div className='chefs_info'>{chefs_info}</div>
      </div>
    </div>
  );
};

export default ChefsItem;
