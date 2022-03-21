import React from 'react'
import './header.css'
import heroImage from '../../assets/images/movie-bg.png'


export const Header = () => {
  return (
    <>
      <header>
        <nav className='py-4'>
          <span className='px-4 border'>
            <h1 className='p-0 m-0 text-white'>Movie App</h1>
          </span>
        </nav>
        <div className='hero'>
          <div className='hero-image'>
            <img src={heroImage} alt='' />
          </div>
          <div className='hero-text'>
            <h1>
              Watch <br /> something <br /> incredible.
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
