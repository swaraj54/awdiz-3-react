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
import Type3UseEffect from './components/Type3UseEffect';
import Type4UseEffect from './components/Type4UseEffect';
import Params from './components/01-07/Params';
import SingleProduct from './components/01-07/SingleProduct';
import DeclerativeWay from './components/01-07/DeclerativeWay';
import Map from './components/01-07/Map';
import { useState } from 'react';
import Wrapper from './components/01-07/Wrapper';
import StyledCompo from './components/01-07/StyledCompo';
import Xyz from './components/02-07/Xyz';
import SinglePro from './components/02-07/SinglePro';
import Map2 from './components/02-07/Map2';
import DynamicStyles from './components/04-07/DynamicStyles';
import DynamicClasses from './components/04-07/DynamicClasses';
import ChildernProp from './components/04-07/ChildernProp';
import FormOne from './components/06-07/FormOne';

function App() {

  const [myUsers, setMyUsers] = useState(["Rahul", "Krishan", "Manoj"])

  // console.log("Inside app")
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/form-one' element={<FormOne />} />
        <Route exact path='/children-prop' element={<ChildernProp />} />
        <Route exact path='/dynamic-classes' element={<DynamicClasses />} />
        <Route exact path='/dynamic-styles' element={<DynamicStyles />} />
        <Route exact path='/map2' element={<Map2 />} />
        <Route exact path='/single-pro/:id' element={<SinglePro />} />
        <Route exact path='/xyz' element={<Xyz />} />
        <Route exact path='/styled-compo' element={<StyledCompo />} />
        <Route exact path='/wrappper' element={<Wrapper />} />
        <Route exact path='/map' element={<Map myUsers={myUsers} setMyUsers={setMyUsers} myName={"Santosh"} kuchBhi={["rOCKY", "rAJ", "hOIHIBUI"]} />} />
        <Route exact path='/declerative-way' element={<DeclerativeWay />} />
        <Route exact path='/single-product/:swaraj' element={<SingleProduct />} />
        <Route exact path='/params' element={<Params />} />
        <Route exact path='/type-4-useeffect' element={<Type4UseEffect />} />
        <Route exact path='/type-3-useeffect' element={<Type3UseEffect />} />
        <Route exact path='/type-2-useeffect' element={<Type2UseEffecct />} />
        <Route exact path='/tyep-1-useeffect' element={<Type1UseEffect />} />
        <Route exact path='/changeSection' element={<Section />} />
        <Route exact path='/counter' element={<Counter />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
