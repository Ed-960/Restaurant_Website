import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../../pages/cart/Cart';
import Main from '../../pages/descriptionContent/Main';
import SignIn from '../../pages/loginPage/SignIn';
import SignUp from '../../pages/signUpPage/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
