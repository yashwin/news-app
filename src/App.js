import React from 'react';
import './App.css';
import HomePage from '../src/components/HomePage/HomePage';
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
    </Router>
  );
}

export default App;
