import React from 'react';
import './App.css';
import FetchQuote from "./quotesFetcher";

function App() {
  return (
    <div className="App">
      {/* header */}
      <h1 className="title">Motivational Quote Generator</h1>
      <h3 className="message">We All Need Encouragement In Life</h3>
      <FetchQuote/>
    </div>
  );
}

export default App;