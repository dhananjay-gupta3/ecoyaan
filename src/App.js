
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import HomePage from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div >
      <Navbar />
      
       <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/about' element={<About/>}/>
       
       </Routes>
  
    </div>
  );
}

export default App;
