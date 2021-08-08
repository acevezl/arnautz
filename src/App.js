import React, { useState } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {

  const [ categories ] = useState([
    {
      name: 'About me',
      description: 'Know more about me'
    },
    {
      name: 'My code doodles',
      description: 'Portfolio of full-stack projects'
    },
    {
      name: 'My resumé',
      description: 'Read more about my professional journey'
    }
  ])

  const [ currentCategory, setCurrentCategory ] = useState( categories[0] );

  return (
    <main className='main' id='main-container'>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <section className='body-container'>
        <Home currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
        <About currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
      </section>
      <Footer 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
    </main>
  );
}

export default App;
