import './App.css';
import React, { Component }  from 'react';
import useNavigate from 'react-dom'
import { Landing } from './component/landingpage';

function App() {
let navigate = navigate();

  return (
    <div className="">
    <p className='font-bold text-3xl text-center'>Project Penjana</p>
    <p>2022</p>
    <p>Faiz</p>
    <p>Farhan</p>
    <button className='border-2' onClick={navigate('landing')}>Go to landing page</button>
    </div>
    
  );
}

export default App;
