import './App.css';
import Home from './Component/home/Home';
import Mens from './Component/mens/Mens';
import Navbar from "./Component/navbar/navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Womens from './Component/womens/Womens';
import Kids from './Component/kids/Kids';
import Signin from './Component/signin/Signin';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mens' element={<Mens/>} />
      <Route path='/womens' element={<Womens />} />
      <Route path='/kids' element={<Kids/>} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
