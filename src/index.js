import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home';
import QuemSomos from './Components/QuemSomos';
import FaleConosco from './Components/FaleConosco';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/quemsomos/' element={<QuemSomos/>}/>
        <Route path='/faleconosco/' element={<FaleConosco/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


