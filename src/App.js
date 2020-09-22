import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';
import Books from './components/book';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/book/:id" component={Books} />
      </div>
    </Router>
  );
}

export default App;
