import React, { useMemo } from 'react';
import './dishItem.scss';
import './dishItem_media.scss';
import star_whole from './../../assets/stars/star_whole.svg';
import star_half from './../../assets/stars/star_half.svg';
import star_null from './../../assets/stars/star_null.svg';
import { starTypesCount } from './helper';

interface Props {
  id: number;
  src: string;
  starCount: number;
  likes: number;
}

const DishItem: React.FC<Props> = ({ id, src, starCount, likes }) => {
  const starTypesCountCall = useMemo(
    () => new starTypesCount(starCount),
    [starCount]
  );
  const [wholeStars, halfStars, nullStars] = useMemo(() => {
    const wholeCount = starTypesCountCall.getStarWholeCount();
    const halfCount = starTypesCountCall.getStarHalfCount();
    const nullCount = starTypesCountCall.getStarNullCount();
    const wholeStars = Array.from({ length: wholeCount }, (_, i) => i);
    const halfStars = Array.from(
      { length: halfCount },
      (_, i) => i + wholeCount
    );
    const nullStars = Array.from(
      { length: nullCount },
      (_, i) => i + wholeCount + halfCount
    );
    return [wholeStars, halfStars, nullStars];
  }, [starTypesCountCall]);

  return (
    <div className='dishItem'>
      <img src={src} alt='meal' />
      <div className='dishInfobox'>
        <div className='dishTitle'>Featured Meal</div>
        <div className='dishInfo'>Served with french fries + drink</div>
        <div className='dishChoice'>
          Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper
          patty, Add Tender crisp patty and more...
        </div>
        <div className='star_like_btn'>
          <div className='stars'>
            {wholeStars.map((i) => (
              <img key={`whole-${i}`} src={star_whole} alt='star' />
            ))}
            {halfStars.map((i) => (
              <img key={`half-${i}`} src={star_half} alt='star' />
            ))}
            {nullStars.map((i) => (
              <img key={`null-${i}`} src={star_null} alt='star' />
            ))}
          </div>
          <div className='likes'>{likes}</div>
          <button className='btn_order' type='button'>
            ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
