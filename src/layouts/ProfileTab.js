import React from 'react'
function ProfileTab(props) {
    console.log(props);
    const userDetails = props.user
    return (
      <li class="dropdown user user-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/img/robot.png" class="user-image" alt="User Image"/>
          <span class="hidden-xs">{userDetails.name}</span>
        </a>
        <ul class="dropdown-menu">
          <li class="user-header">
            <img src="dist/img/robot.png" class="img-circle" alt="User Image"/>
            <p>
              {userDetails.name}
              <small>{userDetails.description}</small>
            </p>
          </li>
        </ul>
      </li>
    )
}
export default ProfileTab;
