import logo from './logo.svg';
import React from 'react';
import Schedule from './components/Schedule';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tennis Lesson Scheduler</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Schedule />
      <Chatbot />
    </div>
  );
}

export default App;
