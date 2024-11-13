import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Abdul Rehman Shaikh</div>

        {/* Hamburger Icon for mobile */}
        <div className='md:hidden' onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links for Desktop */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Connect Button for Desktop */}
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black text-center`}>
        <div className='space-y-4 py-4'>
          <a href="#home" className='block hover:text-gray-400' onClick={toggleMenu}>Home</a>
          <a href="#about" className='block hover:text-gray-400' onClick={toggleMenu}>About Me</a>
          <a href="#service" className='block hover:text-gray-400' onClick={toggleMenu}>Services</a>
          <a href="#project" className='block hover:text-gray-400' onClick={toggleMenu}>Projects</a>
          <a href="#contact" className='block hover:text-gray-400' onClick={toggleMenu}>Contact</a>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-2'>
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
