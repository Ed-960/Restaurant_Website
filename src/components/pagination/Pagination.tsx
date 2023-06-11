import React from 'react';
import './pagination.scss';
import './pagination_media.scss';

interface props {
  food_1: string;
  food_2: string;
}

const Pagination: React.FC<props> = ({ food_1, food_2 }) => {
  return (
    <div className='pagination'>
      <img src={food_1} alt='food_1' />
      <img src={food_2} alt='food_2' />
    </div>
  );
};

export default Pagination;
