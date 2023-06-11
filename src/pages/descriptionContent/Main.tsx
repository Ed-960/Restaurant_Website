import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/button/Button';
import InfItem from '../../components/infItem/InfItem';
import Header from '../../components/header/Header';
import BoxTitle from '../../components/boxTitle/BoxTitle';
import Pagination from '../../components/pagination/Pagination';
import './main.scss';
import './main_media.scss';
import ic_watch_later from './../../assets/ic_watch_later.svg';
import { foodsData, dishesData, chefsData } from '../../state';
import ic_near_me from './../../assets/ic_near_me.svg';
import ic_call from './../../assets/ic_call.svg';
import arrowWhite from './../../assets/arrowWhite.svg';
import arrowLeft from './../../assets/arrowLeft.svg';
import arrowRight from './../../assets/arrowRight.svg';
import watchIcon from './../../assets/watch.svg';
import commentIcon from './../../assets/comment.svg';

import InfoBox from '../../components/infoBox/InfoBox';
import DishItem from '../../components/dishItem/DishItem';
import ChefsItem from '../../components/chefsItem/ChefsItem';
//gallery
import img_big_1 from './../../assets/gallery/big_img_1.png';
import img_2 from './../../assets/gallery/img_2.png';
import img_3 from './../../assets/gallery/img_3.png';
import img_big_4 from './../../assets/gallery/big_img_4.png';
import img_5 from './../../assets/gallery/img_5.png';
import img_6 from './../../assets/gallery/img_6.png';
import img_big_7 from './../../assets/gallery/big_img_7.png';
import img_8 from './../../assets/gallery/img_8.png';
import img_9 from './../../assets/gallery/img_9.png';
import RecipesItem from '../../components/recipesItem/RecipesItem';
import MediaItem from '../../components/MediaItem/MediaItem';

//social
import fb from './../../assets/socialMediaIcon/fb.svg';
import twitter from './../../assets/socialMediaIcon/twitter.svg';
import insta from './../../assets/socialMediaIcon/instagram.svg';
import AppLogo from '../../components/appLogo/AppLogo';
import MenuPopup from '../../components/menuPopup/MenuPopup';

const itemsPerPage = 1;

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showItems, setShowItems] = useState<boolean>(false);
  const listRef = useRef(null);

  // responsive
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuToggle = (val: boolean) => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    setShowItems(false);

    const timer = setTimeout(() => {
      setShowItems(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === foodsData.length) {
      setCurrentPage(1);
    }
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage === 1) {
      setCurrentPage(foodsData.length);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = foodsData.slice(startIndex, endIndex);

  //autoScroll to any place by clicking on menu

  type Refs = {
    [key: string]: React.MutableRefObject<any>;
  };

  const refs: Refs = {
    menuRef: useRef(null),
    recipesRef: useRef(null),
    chefsRef: useRef(null),
    contactsRef: useRef(null),
  };

  const handleMenuItemClick = (refName: string) => {
    refs[refName].current?.scrollIntoView({ behavior: 'smooth' });
    handleMenuToggle(false);
  };

  return (
    <div className='box'>
      <div className='bgi'>
        <Header
          handleMenuItemClick={handleMenuItemClick}
          showMenu={showMenu}
          handleMenuToggle={handleMenuToggle}
        />
        {showMenu && (
          <MenuPopup showMenu={showMenu} handleMenuItemClick={handleMenuItemClick} handleMenuToggle={handleMenuToggle}/>
        )}
        <div className='container'>
          <div>
            <div className='title'>
              <span className='titleStyle'>Your </span>Favourite Food
              <div>
                <span className='titleStyle'> Delivered </span>
                Hot & Fresh
              </div>
            </div>
            <div className='paragraph'>
              <div>
                HEALTHY SWITCHER chefs do all the prep work, like peeling,
                chopping
              </div>
              <div>
                & marinating, so you can cook a fresh homemade dinner in just 15
                minutes.
              </div>
            </div>
          </div>
          <Button btnInner='Order Now' btnType='buttonTypeGreen' />
          <div ref={refs.contactsRef} className='infItems'>
            <InfItem
              src={ic_watch_later}
              content='Today 10:00 am - 7:00 pm'
              description='Working hours'
            />
            <InfItem
              src={ic_near_me}
              content='Velyka Vasylkivska 100'
              description='Get Directions'
            />
            <InfItem
              src={ic_call}
              content='+38 (063)833 24 15'
              description='Call Online'
            />
          </div>
        </div>
        <div className='about'>
          <BoxTitle bgTitle='ABOUT' title='The Basics Of Healthy Food' />
          <div className='about_info '>
            In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint
            ea aliquip aliquip consectetur voluptate est. Eu minim dolore
            laboris enim mollit voluptate irure esse aliquip.
          </div>
          <div className='pagination_box'>
            <button onClick={handleNextClick}>
              <img src={arrowRight} alt='right' />
            </button>

            <div className={`list ${showItems ? 'show' : ''}`} ref={listRef}>
              <Pagination
                food_1={visibleItems[0].names[0]}
                food_2={visibleItems[0].names[1]}
              />
            </div>
            <button onClick={handlePrevClick}>
              <img src={arrowLeft} alt='left' />
            </button>
          </div>
        </div>
      </div>
      <div className='work'>
        <BoxTitle bgTitle='WORK' title='How It Works' />
        <div className='underLine'></div>
        <div className='infoBox_items'>
          <InfoBox
            boxTitle='Pick meals'
            boxText='Choose your meals from our diverse weekly menu. 
              Find gluten or dairy free, low carb & veggie options.'
          />
          <InfoBox
            boxTitle='Choose how often'
            boxText='Our team of chefs do the prep work - no more chopping, 
              measuring, or sink full of dishes!'
          />
          <InfoBox
            boxTitle='Fast Deliveries'
            boxText='Your freshly prepped 15-min dinner kits arrive on 
              your doorstep in a refrigerated box.'
          />
          <InfoBox
            boxTitle='Tasty Meals'
            boxText='Gobble makes cooking fast, so you have more time to unwind and be with family.'
          />
        </div>
      </div>
      <div ref={refs.menuRef} className='dishes'>
        <BoxTitle bgTitle='DISHES' title='Dish Of The Day' />
        <div className='underLine'></div>
        <div className='dishItems'>
          {dishesData.map((el) => (
            <DishItem
              key={el.id}
              id={el.id}
              src={el.src}
              starCount={el.starCount}
              likes={el.likes}
            />
          ))}
          ;
        </div>
      </div>
      <div ref={refs.chefsRef} className='chefs'>
        <BoxTitle bgTitle='CHEFS' title={`This month's chefs`} />
        <div className='underLine'></div>
        <div className='chefs_content'>
          <div className='chefs_item'>
            {chefsData.map((el) => (
              <ChefsItem
                key={el.id}
                chefs_id={el.id}
                chefs_src={el.src}
                chefs_name={el.name}
                chefs_info={el.info}
              />
            ))}
          </div>
          <div className='gallery'>
            <img src={img_big_1} className='img_big' alt='gallery' />
            <img src={img_2} className='img_small' alt='gallery' />
            <img src={img_3} className='img_small' alt='gallery' />
            <img src={img_big_4} className='img_big' alt='gallery' />
            <img src={img_5} className='img_small' alt='gallery' />
            <img src={img_6} className='img_small' alt='gallery' />
            <img src={img_big_7} className='img_big' alt='gallery' />
            <img src={img_8} className='img_small' alt='gallery' />
            <img src={img_9} className='img_small' alt='gallery' />
          </div>
        </div>
      </div>
      <div ref={refs.recipesRef} className='recipes'>
        <BoxTitle bgTitle='RECIPES' title='Recipes From Our Chefs' />
        <div className='underLine'></div>
        <div className='recipes_content'>
          <div className='recipes_main_content'>
            <img className='recipes_arrow_white' src={arrowWhite} alt='arrow' />
            <Button btnInner='BREAKFAST' btnType='buttonTypeDark' />
            <div className='recipes_content_data'>05 Jul 2016</div>
            <div className='recipes_content_text'>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit
            </div>
            <div className='recipes_content_name'>Jason Keller</div>
            <div className='recipes_info'>
              <div className='recipes_watch'>
                <img src={watchIcon} alt='watch' />
                <div className='recipes_watch_count'>275</div>
              </div>
              <div className='recipes_comment'>
                <img src={commentIcon} alt='comment' />
                <div className='recipes_comment_count'>12</div>
              </div>
            </div>
          </div>
          <div className='recipesItems'>
            <RecipesItem
              btnName='LUNCH'
              watchCount={275}
              commentCount={12}
              data='07 Jan 2016'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
              state='classicType'
              btnType='buttonTypeDark'
            />
            <RecipesItem
              btnName='DINNER'
              watchCount={275}
              commentCount={12}
              data='07 Jan 2016'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
              state='withBackgraindImage'
              btnType='buttonTypeDark'
            />
            <RecipesItem
              btnName='SWEATS'
              watchCount={275}
              commentCount={12}
              data='07 Jan 2016'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
              state='secondType'
              btnType='buttonTypeDarker'
            />
          </div>
        </div>
      </div>
      <div className='social'>
        <BoxTitle bgTitle='SOCIAL' title='We in Social' />
        <div className='underLine'></div>
        <div className='social_mediaItem'>
          <MediaItem
            mediaIcon={twitter}
            mediaName='Twitter'
            mediaPublicedData='24 Jun at 16:20 pm'
            mediaPublicedMaterial='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                consectetur adipiscing'
          />
          <MediaItem
            mediaIcon={insta}
            mediaName='Instagram'
            mediaPublicedData='24 Jun at 16:20 pm'
            mediaPublicedMaterial='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                consectetur adipiscing'
          />
          <MediaItem
            mediaIcon={fb}
            mediaName='facebook'
            mediaPublicedData='24 Jun at 16:20 pm'
            mediaPublicedMaterial='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
                consectetur adipiscing'
          />
        </div>
      </div>
      <div className='footer'>
        <div className='infItems'>
          <InfItem
            src={ic_watch_later}
            content='Today 10:00 am - 7:00 pm'
            description='Working hours'
          />
          <InfItem
            src={ic_near_me}
            content='Velyka Vasylkivska 100'
            description='Get Directions'
          />
          <InfItem
            src={ic_call}
            content='+38 (063)833 24 15'
            description='Call Online'
          />
        </div>
        <div className='footer_underLine'></div>
        <div className='footer_bottom'>
          <AppLogo />
          <div className='author'>
            © Designed by Yellow Snow. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
