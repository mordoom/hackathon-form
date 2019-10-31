import React from 'react';
import './App.css';
import InputForm from './InputForm';
import { Header } from './Header';
import { ProgressIndicator } from './Progress';

function App() {
  return (
    <div className="App">
      <Header />
      <ProgressIndicator />
      <InputForm/>
    </div>
  );
}

export default App;
