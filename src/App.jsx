import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App
