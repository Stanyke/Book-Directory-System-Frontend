import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Books from './components/Book';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/book/:id" component={Books} />
        <Route path="/post" component={Posts} />
      </div>
    </Router>
  );
}

export default App;
