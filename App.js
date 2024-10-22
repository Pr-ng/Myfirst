import logo from './logo.svg';
import './App.css';
import image1 from "./logo192.png" 
import ArrowFunction from './components/ArrowFunction';
import ArrayMetod from './components/ArrayMetod';
import Destructuring from './components/Destructuring';
import SpreadOperator from './components/SpreadOperator';
import TernaryOperator from './components/TernaryOperator';
import Home from './components/Home';
import Props from './components/Props';
import State from './components/State';
import MUIComponents from './components/MUIComponents';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  const mystyle={
    color:"blue",
    backgroundColor:"red"
    
  }
  let name="User"
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/arrow'element={<ArrowFunction/>}/>
      <Route exact path='/array' element={<ArrayMetod/>}/>
      <Route exact path='/dest' element={<Destructuring/>}/>
      <Route exact path='/ternary' element={<TernaryOperator/>}/>
      <Route exact path='/props'element={<Props/>}/>
      <Route exact path='/State'element={<State/>}/>
      <Route exact path='/MUI'element={<MUIComponents/>}/>
      </Routes>
        </BrowserRouter>
    {/* <p>My name is prajwal</p>
    <h1 style={{color:"red",backgroundColor:"blue"}}>Heading 1</h1>
    <h2 style={{color:"green",backgroundColor:"yellow"}}>Heading 2</h2>
    <h3 style={mystyle}>Heading 3</h3>
    <h4 style={mystyle}>Heading 4</h4>
    <h5 className="header"htmlFor>Heading 5</h5>
    <h6>Heading 6</h6>
    <img src={image1} />
    <ArrowFunction/>
    <ArrayMetod/>
    <Destructuring/>
    <SpreadOperator/>
    <TernaryOperator/> */}
   </div>
  );
}

export default App;
