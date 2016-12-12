// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import style from './theme.styl'

// Exports
export default class Theme extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.theme} role="main">
        <div className="container">
        </div>
      </div>
    )
  }
}
