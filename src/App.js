import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [ categories ] = useState([
    'Home','About me','My code doodles','Resumé','Contact'
  ])

  const [ projects ] = useState([
    {
      name: 'URU',
      class: 'uru',
      short_description: 'A full MERN application',
      long_description: 'A full MERN application using GraphQL and Email JS. URU is a gig-economy app designed to connect kids with special needs with therapists. It stores data in MongoDB and uses GraphQL for data retrieval. Search is optimized for a Google-like experience.',
      image: 'uru.png',
      link: 'https://uru.herokuapp.com',
      github: 'https://github.com/acevezl/uru'
    },
    {
      name: 'HausKeepr',
      class: 'hauskeepr',
      short_description: 'A full-stack MVC application',
      long_description: 'My very own concept of an MVC application using full stack. HausKeepr is a gig-economy app designed to connect housekeepers to client or working professionals, allowing for an easy and convenient way of getting assistance on house work.',
      image: 'hauskeepr-dashboard.png',
      link: 'https://hauskeepr-mvp.herokuapp.com/',
      github: 'https://github.com/patricklago21/hausKeepr/'
    },
    {
      name: 'Tech News',
      class: 'technews',
      short_description: 'An MVC App',
      long_description: 'My very first MVC app on Node.JS - Goodbye PHP, C# and .NET - I\'m never coming back!',
      image: 'technews.png',
      link: 'https://thetechnews.herokuapp.com/',
      github: 'https://github.com/acevezl/technews'
    },
    {
      name: 'Bike Watch',
      class: 'bikewatch',
      short_description: 'BikeWise + Google APIs',
      long_description: 'My very own concept of an app that shows biking incidents around the user.',
      image: 'bike-watch.png',
      link: 'https://acevezl.github.io/biker/',
      github: 'https://github.com/acevezl/biker'
    },
    {
      name: 'Weather Fetch',
      class: 'weather-fetch',
      short_description: 'This Weather App is so Fetch!',
      long_description: 'A  weather app that retrieves weather from any location in the world via OpenWeatherMap.',
      image: 'weather-fetch.png',
      link: 'https://acevezl.github.io/challengesix/',
      github: 'https://github.com/acevezl/challengesix'
    },
    {
      name: 'Scheduler',
      class: 'scheduler',
      short_description: 'A Javascript Scheduler',
      long_description: 'Class project. A scheduler app that allows you save events, store them in local storage, and retrieve them.',
      image: 'scheduler.gif',
      link: 'https://acevezl.github.io/challengefive/',
      github: 'https://github.com/acevezl/challengefive'
    },
    {
      name: 'JS Quiz',
      class: 'quiz',
      short_description: 'A Javascript Quiz',
      long_description: 'The hardest quiz ever written. A quiz about JavaScript written in JavaScript. How many questions can you answer before the time runs out?',
      image: 'js-quiz.png',
      link: 'https://acevezl.github.io/challengefour/',
      github: 'https://github.com/acevezl/challengefour'
    },
    {
      name: 'A password generator',
      class: 'password-generator',
      short_description: 'The strongest passwords you can ever get are here!',
      long_description: 'A random generator that creates very complex passwords for your convenience!',
      image: 'password-generator.png',
      link: 'https://acevezl.github.io/challengefive/',
      github: 'https://github.com/acevezl/challengefive'
    },
    {
      name: 'Run-Buddy',
      class: 'run-buddy',
      short_description: 'Pure and classic HTML',
      long_description: 'Class project. This site implements CSS 3 and responsive principles.',
      image: 'run-buddy.jpg',
      link: 'https://acevezl.github.io/run-buddy/',
      github: 'https://github.com/acevezl/run-buddy'
    },
    {
      name: 'HoriSEOn',
      class: 'horiseon',
      short_description: 'Online responsive accesibility',
      long_description: 'Class project. Styled site in a way that makes the elements accessible and render in a responsive way.',
      image: 'horiseon.jpg',
      link: 'https://acevezl.github.io/challengeone/',
      github: 'https://github.com/acevezl/challengeone'
    },
    {
      name: 'Fightin\' Robo Hobos',
      class: 'robohobos',
      short_description: 'Classic Javascript Logic',
      long_description: 'Class project. Javascript mini-game of fighting homeless robots.',
      image: 'robo-hobo.jpeg',
      link: 'https://github.com/acevezl/robot-gladiators',
      github: 'https://github.com/acevezl/robot-gladiators'
    },
    {
      name: 'Rock Paper Scissors',
      class: 'rock-paper-scissors',
      short_description: 'Classic Javascript Logic',
      long_description: 'Class project. Rock-Paper-Scissors game using basic JS.',
      image: 'rock-paper-scissors.png',
      link: 'https://acevezl.github.io/rock-paper-scissors/',
      github: 'https://github.com/acevezl/rock-paper-scissors'
    },

  ]);

  const [ currentCategory, setCurrentCategory ] = useState( categories[0] );

  useEffect( () => {
    document.title = 'Luis Arnaut | ' + currentCategory;
  }, [currentCategory]);

  const renderPage = () => {

    switch(currentCategory) {
      case 'About me': return(<About currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>);
      case 'My code doodles': return(<ProjectList currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} projects={projects}/>);
      case 'Contact': return(<Contact/>);
      case 'Resumé': return(<Resume/>);
      default: return(<Home currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>);
    }

  }

  return (
    <main className='main' id='main-container'>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <section className='body-container'>
        {renderPage()}
      </section>
      <Footer/>
    </main>
  );
}

export default App;
