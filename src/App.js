import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';


function App() {
  return (
   <>
     <Home/>
     <Sidebar/>
     <Modal/>
   </>
  );
}

export default App;