import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/starships", name: "Starship"}
  ])
  return (
      <>
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
        </Routes>
        </>
      
  );
}

export default App;
