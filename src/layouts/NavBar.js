import React from 'react'
import ProfileTab from './ProfileTab'
function NavBar() {
  const user = {
    name: "Sam Sepiol",
    description: "Mr.Robot"
  }
  return (
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <ProfileTab user={user}/>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;
