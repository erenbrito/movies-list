import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Link from './components/Link';
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link />
          <MoviesList />
        </header>
      </div>
    );
  }
}

export default App;
