import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landingpage';
import Watching from './pages/Watching';
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      
    
      <Routes>
        <Route path='/landing' element={<Landing />}  />
       <Route path='/home' element={<Home/>}  />
       <Route path='/watch' element={<Watching />} />
      </Routes>
      <Footer/>

    </div>


  );
}

export default App;
