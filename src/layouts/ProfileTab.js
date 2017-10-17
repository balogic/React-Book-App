import React from 'react'
function ProfileTab(props) {
    const userDetails = props.user
    return (
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/img/robot.png" className="user-image" alt="User"/>
          <span className="hidden-xs">{userDetails.name}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src="dist/img/robot.png" className="img-circle" alt="User"/>
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
