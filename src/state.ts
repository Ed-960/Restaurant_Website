// foods -> about section
import food_1 from './assets/foods/foods/food1.png';
import food_2 from './assets/foods/foods/food2.png';
import food_3 from './assets/foods/foods/food3.png';
import food_4 from './assets/foods/foods/food4.png';
import food_5 from './assets/foods/foods/food5.jpg';
import food_6 from './assets/foods/foods/food6.jpg';
// meals -> dishes section
import meal_1 from './assets/foods/meals/meal_1.png';
import meal_2 from './assets/foods/meals/meal_2.png';
import meal_3 from './assets/foods/meals/meal_3.png';
import meal_4 from './assets/foods/meals/meal_4.png';
import meal_5 from './assets/foods/meals/meal_5.png';
import meal_6 from './assets/foods/meals/meal_6.png';
//chefs
import chef_1 from './assets/chefs/chef_1.png';
import chef_2 from './assets/chefs/chef_2.png';
import chef_3 from './assets/chefs/chef_3.png';

// about section
export const foodsData: Array<{ names: [string, string]; id: number }> = [
  { names: [food_1, food_2], id: 1 },
  { names: [food_3, food_4], id: 2 },
  { names: [food_5, food_6], id: 2 },
];

// dishes section
export const dishesData: Array<{
  id: number;
  src: string;
  starCount: number;
  likes: number;
}> = [
  {
    id: 1,
    src: meal_1,
    starCount: 4.5,
    likes: 12,
  },
  {
    id: 2,
    src: meal_2,
    starCount: 0,
    likes: 160,
  },
  {
    id: 3,
    src: meal_3,
    starCount: 5,
    likes: 98,
  },
  {
    id: 4,
    src: meal_4,
    starCount: 2.5,
    likes: 10,
  },
  {
    id: 5,
    src: meal_5,
    starCount: 0,
    likes: 0,
  },
  {
    id: 6,
    src: meal_6,
    starCount: 4,
    likes: 1,
  },
];

export const chefsData: Array<{
  id: number;
  src: string;
  name: string;
  info: string;
}> = [
  {
    id: 1,
    src: chef_1,
    name: 'Gregory Flores',
    info: 'Chef of the cold',
  },
  {
    id: 2,
    src: chef_2,
    name: 'Annette Cooper',
    info: 'Chef of the hot',
  },
  {
    id: 3,
    src: chef_3,
    name: 'Greg Fox',
    info: 'Сhef macro kitchen',
  },
];
