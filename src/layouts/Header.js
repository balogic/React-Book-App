import React from 'react'
import NavBar from './NavBar'
function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <span className="logo-mini">
          <b>R</b>B</span>
        <span className="logo-lg">
          <b>React</b>Book</span>
      </a>
      <NavBar/>
    </header>
  )
}
export default Header;
