// React Deps
import React from 'react'
import { Link } from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'

// Modules
import HeroTitle from './HeroTitle/HeroTitle'
import style from './heroArea.styl'

// Exports
export default class HeroArea extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    return (
      <Jumbotron className={style.heroArea}>
        <div className="container">
          <HeroTitle titleTxt={this.props.titleTxt} />
          <p>{this.props.bodyTxt}</p>
        </div>
      </Jumbotron>
    )
  }
}
