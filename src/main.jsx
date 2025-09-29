import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
//Páginas
//Componentes
import Navbar from './components/navbar';
//Algoritmos
import middle_square from './rng/no congruential/middle_square'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Router>
      <Routes>
        <Route path = '/middles' element = {<middle_square/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
