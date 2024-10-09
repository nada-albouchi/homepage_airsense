import React from 'react';
import Logo from '../../assets/logo.png'; // Ensure the logo path is correct

const Navbar = () => {
  return (
    <header>
      <div className='container py-5 flex items-center justify-between'>
      {/* Logo section */}
      <div>
        <img src={Logo} alt="AirSense Logo" className='w-40' />
      </div>
      {/* Nav section */}
      <ul className='hidden md:flex  items-center gap-5'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Our services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* Button section */}
      <div>
        {/* Add any buttons if needed */}
        <button className='border border-pink-300 px-4 py-2 rounded-lg hover:bg-rose hover:text-white transform duration-300'>Let's Start</button>
      </div>
      </div>
    </header>
  );
}

export default Navbar; 
