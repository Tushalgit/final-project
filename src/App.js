import React from 'react';
import './App.css';
import Nav from './features/Navbar/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contect from './Pages/Contect'
import ProductList from './features/Product/Component/ProductList'
import Error from './Pages/Error'
import { Routes, Route } from 'react-router-dom';
import Loginpage from './Pages/Loginpage';
import SignupPage from './Pages/SignupPage';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <>
      <div className="app">
      <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
