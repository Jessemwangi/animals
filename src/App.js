import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Animal from './Animal';
import Narbar from './Narbar';
import Home from './Home';
import Birds from './Birds';
import About from './About';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Narbar></Narbar>
      
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/animals' element={<Animal/>}>Animals</Route>
        <Route path='/birds' element={<Birds/>}>Birds</Route>
        <Route path='/about' element={<About/>}>Home</Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
