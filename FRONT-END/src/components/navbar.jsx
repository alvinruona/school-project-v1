import React, { useEffect, useState } from "react";
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1>Nilism</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button>Sign Up</button>
    </nav>
  )
}

export default Navbar