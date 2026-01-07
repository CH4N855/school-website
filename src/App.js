import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
   
   <div>
       <BrowserRouter>
       <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/admissions" element={<Admissions/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
       </BrowserRouter>
   </div>
  );
}

export default App;
