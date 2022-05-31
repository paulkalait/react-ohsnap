import About from './components/About';
import Nav from './components/Nav'
import './App.css';
import React from 'react';

function App() {
  return (
    <div>
    <Nav></Nav>
    <main>
    <About />
    </main>
    </div>
  );
}

export default App;
