import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/global/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import AllProducts from './components/AllProducts';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/add-product' element={<AddProduct />} />
        <Route exact path='/all-products' element={<AllProducts />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
