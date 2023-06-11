import React, { useRef } from 'react';
import AppLogo from '../appLogo/AppLogo';
import './header.scss';
import './header_media.scss';
import menuIcon from './../../assets/responsive/menuIcon.svg';

interface Props {
  handleMenuItemClick(ref: string): void;
  showMenu: boolean;
  handleMenuToggle(val?: boolean | undefined): void;
}

const Header: React.FC<Props> = ({
  handleMenuItemClick,
  showMenu,
  handleMenuToggle,
}) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  function handleToggleClick(event: React.MouseEvent<HTMLDivElement>) {
    handleMenuToggle();
  }

  return (
    <header className='header'>
      <nav className='header_nav'>
        <div className='applogo'>
          <AppLogo />
        </div>
        <ul ref={menuRef} className={`header_menu ${showMenu ? 'open' : ''}`}>
          <li onClick={() => handleMenuItemClick('menuRef')}>Menu</li>
          <li onClick={() => handleMenuItemClick('recipesRef')}>Recipes</li>
          <li onClick={() => handleMenuItemClick('chefsRef')}>Chefs</li>
          <li onClick={() => handleMenuItemClick('contactsRef')}>Contacts</li>
        </ul>
        <div
          className='header_toggle'
          ref={toggleRef}
          onClick={handleToggleClick}
        >
          <img src={menuIcon} alt='menu' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
