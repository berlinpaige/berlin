// React Deps
import React from 'react'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// Modules
import Logo from './Logo/Logo'
import style from './navMain.styl'

// Exports
export default class NavMain extends React.Component {
	constructor(props) {
		super(props);
		this.titleTxt = 'ReactJS Boilerplate'
	}
  handleSelect(eventKey) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }
	render() {
    return (
      <Navbar className={style.navMain} inverse>
        <Navbar.Header>
          <Logo></Logo>
          <Navbar.Brand>
            <Link to="/">{this.titleTxt}</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/#/about">About</NavItem>
          <NavItem eventKey={2} href="/#/theme">Theme</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}
