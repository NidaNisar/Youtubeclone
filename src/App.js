
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './Pages/home/Home'
import Video from './Pages/video/Video'
import { useState } from 'react';

function App() {
  const [sidebar,setsidebar]=useState(true);
  return (
    <div className="App">
    <Navbar setsidebar={setsidebar}/>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryid/:videoid' element={<Video/>}/>
    </Routes>
     </div>
  );
}

export default App;
