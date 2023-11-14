import React from 'react';
import './HeaderSocials.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a className='linked' href="https://www.linkedin.com/in/farhad-hossain-33165a266" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a className='github' href="https://github.com/farhadhossaineu" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials