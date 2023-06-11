import React from 'react';
import Button from '../button/Button';
import './recipesItem.scss';
import './recipesItem_media.scss';
import watchIconWhite from './../../assets/watch.svg';
import watchIconDark from './../../assets/watch_iconDark.svg';
import commentIconWhite from './../../assets/comment.svg';
import commentIconDark from './../../assets/comment_iconDark.svg';
import recipleItemImg from './../../assets/recipleItemImg.png';

interface Props {
  btnName: string;
  watchCount: number;
  commentCount: number;
  data: string;
  text: string;
  state: string;
  btnType: string;
}

const RecipesItem: React.FC<Props> = ({
  btnName,
  watchCount,
  commentCount,
  data,
  text,
  state,
  btnType,
}) => {
  let myStyle;
  let dateStyle;
  let watchIcon: string;
  let commentIcon: string;
  switch (state) {
    case 'secondType':
      myStyle = { backgroundColor: '#34C759', color: '#252525' };
      dateStyle = { color: '#252525' };
      watchIcon = watchIconDark;
      commentIcon = commentIconDark;
      break;
    case 'withBackgraindImage':
      myStyle = {
        backgroundImage: `url(${recipleItemImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };
      watchIcon = watchIconWhite;
      commentIcon = commentIconWhite;
      break;
    default:
      myStyle = { backgroundColor: '#252525' };
      watchIcon = watchIconWhite;
      commentIcon = commentIconWhite;
  }

  return (
    <div className='recipesItem' style={myStyle}>
      <div className='recipesItem_text'>{text}</div>
      <div>
        <div className='recipesItem_inner'>
          <div className='recipesItem_btn_data'>
            <Button btnInner={btnName} btnType={btnType} />
            <div style={dateStyle} className='recipesItem_data'>
              {data}
            </div>
          </div>
          <div className='recipesItem_info_box'>
            <div className='recipesItem_watch'>
              <img src={watchIcon} alt='watch' />
              <div className='recipesItem_watch_count'>{watchCount}</div>
            </div>
            <div className='recipesItem_comment'>
              <img src={commentIcon} alt='comment' />
              <div className='recipesItem_comment_count'>{commentCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesItem;
