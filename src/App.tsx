import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/Scoreboard'

function App() {
  return (
    <div className="App">
      <Scoreboard player1="Player One" player2="Player Two"/>
    </div>
  );
}

export default App;