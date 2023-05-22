import './App.css';
import React from 'react';
import FruitsMaster from './components/FruitsMaster';
import ErrorPage from './components/ErrorPage';
import FruitDetails from './components/FruitDetails';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FruitsMaster />}>
          <Route path="/fruits/:id" element={<FruitDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <FruitsMaster />
    </div>
  );
}