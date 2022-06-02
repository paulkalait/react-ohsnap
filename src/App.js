import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import Contact from './components/Contact';
import './App.css';
import React, { useState } from 'react'

function App() {
  // set to false to prevent the contact form from showing when a user initally  navigates to the homepage
  const [contactSelected, setContactSelected] = useState(false)

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
    contactSelected = {contactSelected}
    setContactSelected = {setContactSelected}
    ></Nav>
    {!contactSelected ? 
    (
      <>
      <Gallery 
    currentCategory={currentCategory}></Gallery>
    <About></About>
      </>
    ):(
      <Contact></Contact>
    )}
   
    </div>
  );
}

export default App;
