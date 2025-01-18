import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <header>
      <nav>
        {/* Header content */}
      </nav>
    </header>
  );
};

export default Header;
