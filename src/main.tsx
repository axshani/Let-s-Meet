import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='LandingPage' element={<LandingPage name='Alex Shani' description='Admin Admin Admin Test Test Test'/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
