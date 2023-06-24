import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {

  console.log("Inside app")
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
