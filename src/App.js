import './App.css';
import React from 'react';
import { Searchbar } from './components/search/searchbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fast Reddit</h1>
        <h2>A quick fix of your favorite Subreddits</h2>
      </header>
      <body>
        <Searchbar />
      </body>
    </div>
  );
}

export default App;
