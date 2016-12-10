// React Deps
import React from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'

// Modules
import style from './logo.styl'

// Exports
export default class Logo extends React.Component {
	constructor(props) {
		super(props);
		this.titleTxt = 'ReactJS Boilerplate'
	}
	render() {
    return (
      <Link to="/">
        <Image className={style.logo} src="images/title.png" />
      </Link>
    )
  }
}
