import React, { useState, useEffect, useRef } from 'react';
import './menuPopup_media.scss';

interface PopupProps {
  handleMenuItemClick: (refName: string) => void;
  showMenu: boolean;  
  handleMenuToggle: (val: boolean) => void;
}

const MenuPopup: React.FC<PopupProps> = ({
  showMenu, handleMenuItemClick, handleMenuToggle,
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (showMenu && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [showMenu]);

  const animatedFunction = (any_function: (...args: boolean[]) => void, ...args: boolean[]): void => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      any_function(...args);
    }, 300);
  };

  return (
    <div className={`popup ${showMenu ? 'open' : ''} ${isAnimating ? 'animating' : ''}`}>
      <div className="popup-overlay" onClick={() => { animatedFunction(handleMenuToggle, false); }} />
      <div className="popup-content">
        <button type="button" className="close-button" onClick={() => { animatedFunction(handleMenuToggle, false); }}>x</button>   
        <ul className='popup-content_menu'>
            <li
              className='popup-content_list'
              onClick={() => handleMenuItemClick('menuRef')}
            >
              Menu
            </li>
            <li
              className='popup-content_list'
              onClick={() => handleMenuItemClick('recipesRef')}
            >
              Recipes
            </li>
            <li
              className='popup-content_list'
              onClick={() => handleMenuItemClick('chefsRef')}
            >
              Chefs
            </li>
            <li
              className='popup-content_list'
              onClick={() => handleMenuItemClick('contactsRef')}
            >
              Contacts
            </li>
          </ul>
      </div>
    </div>
  );
};

export default MenuPopup;
