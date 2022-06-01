import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import './App.css';
import React, { useState } from 'react'

function App() {
  const [categories] = useState([
    {
      // list of categories
      name: 'commercial',
      description: 'Photo of grocery stores, food trucks, and other commercial projects',
    },
     // list of categories
    {name: 'portraits', description: 'Portraits of people in my life'},
     // list of categories
    {name: 'food', description: 'Delicious delicacies'},
    {
       // list of categories
      name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
    <Nav
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    ></Nav>
    <main>
    <Gallery 
    currentCategory={currentCategory}></Gallery>
    <About></About>
    </main>
    </div>
  );
}

export default App;
