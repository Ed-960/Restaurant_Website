import React from 'react';
import './appLogo.scss';
import logo from './../../assets/logo.svg';
import logoText from './../../assets/logo_text.svg';

const AppLogo: React.FC = () => {
  return (
    <div>
      <div className='appLogo_box'>
        <img src={logo} alt='logo' />
        <img className='logoText' src={logoText} alt='logoText' />
      </div>
    </div>
  );
};

export default AppLogo;
