import React from 'react';
import './button.scss';

interface props {
  btnInner: string;
  btnType: string;
}

const Button: React.FC<props> = ({ btnInner, btnType }) => {
  return (
    <div className='button'>
      <button className={btnType} type='button'>
        <p>{btnInner}</p>
      </button>
    </div>
  );
};

export default Button;
