// React Deps
import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// Modules
import style from './navMain.styl'

// Exports
export default class NavMain extends React.Component {
	constructor(props) {
		super(props);
	}
  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }
	render() {
    return (
      <Navbar className={style.navMain} inverse>
        <Nav>
          <NavItem eventKey={1} href="/#/about">About</NavItem>
          <NavItem eventKey={2} href="/#/theme">Theme</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
