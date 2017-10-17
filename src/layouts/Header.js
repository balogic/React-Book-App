import React from 'react'
import NavBar from './NavBar'
function Header() {
  return (
    <header class="main-header">
      <a href="#" class="logo">
        <span class="logo-mini">
          <b>R</b>B</span>
        <span class="logo-lg">
          <b>React</b>Book</span>
      </a>
      <NavBar/>
    </header>
  )
}
export default Header;
