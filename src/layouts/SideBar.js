import React from 'react'
function SideBar(props) {
  const items = props.items
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
        {items.map((item) => (
          <li class="treeview">
            <a href={item.url}>
              <i class="fa fa-book"></i>
              <span>{item.type}</span>
            </a>
          </li>
        ))}
        </ul>
      </section>
    </aside>
  )
}
export default SideBar;
