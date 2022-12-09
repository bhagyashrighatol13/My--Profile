import React from 'react';
import './App.css';
import MyProfile from './MyProfile';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyProfile></MyProfile>}></Route>
        <Route path='/home' element={<MyProfile></MyProfile>}></Route>
        <Route path='/About' element={<MyProfile></MyProfile>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
