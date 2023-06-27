import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Counter from './components/Counter';
import Section from './components/Section';
import Type1UseEffect from './components/Type1UseEffect';
import Type2UseEffecct from './components/Type2UseEffecct';

function App() {

  // console.log("Inside app")
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/type-2-useeffect' element={<Type2UseEffecct />} />
        <Route exact path='/tyep-1-useeffect' element={<Type1UseEffect />} />
        <Route exact path='/changeSection' element={<Section />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
