import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Animal from './Animal';
import Narbar from './Narbar';
import Home from './Home';
import Birds from './Birds';
import About from './About';
import NotFoound from './NotFoound';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='mainNav'>
      <Narbar></Narbar>
      </div>
      <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/animals' element={<Animal/>}>Animals</Route>
        <Route path='/birds' element={<Birds/>}>Birds</Route>
        <Route path='/about' element={<About/>}>Home</Route>
        <Route path='*' element={<NotFoound/>}></Route>
      </Routes>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
