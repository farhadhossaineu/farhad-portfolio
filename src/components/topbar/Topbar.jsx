// Topbar.js

import React, { useState, useEffect } from 'react';
// import { AiOutlineHome } from 'react-icons/ai';
// import { AiOutlineUser } from 'react-icons/ai';
// import { BiBook } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
// import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the threshold as needed
      if (scrollPosition > 50) {
        // Add a class to the navbar when scrolling down
        document.querySelector('nav').classList.add('scrolled');
      } else {
        // Remove the class when scrolling back to the top
        document.querySelector('nav').classList.remove('scrolled');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className='left'>
        <h3>Farhad</h3>
      </div>
       <div className='right'>
       <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home
        {/* <AiOutlineHome /> */}
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About
        {/* <AiOutlineUser /> */}
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skill
        {/* <BiBook /> */}
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Portfolio
        {/* <RiServiceLine /> */}
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact
        {/* <BiMessageSquareDetail /> */}
      </a>
       </div>
    </nav>
  );
};

export default Topbar;
