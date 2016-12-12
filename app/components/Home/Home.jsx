// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import style from './home.styl'
import Projects from '../Projects/Projects'

// Exports
export default class Home extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.theme} role="main">
        <Projects />
      </div>
    )
  }
}
