import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter, Header} from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
