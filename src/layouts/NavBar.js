import React from 'react'
import ProfileTab from './ProfileTab'
function NavBar() {
  const user = {
    name: "Sam Sepiol",
    description: "Mr.Robot"
  }
  return (
    <nav className="navbar navbar-static-top">
      <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <ProfileTab user={user}/>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;
