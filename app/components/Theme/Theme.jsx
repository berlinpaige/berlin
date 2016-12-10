// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import HeroArea from '../HeroArea/HeroArea'
import Counter from './Counter/Counter'
import Companies from './Companies/Companies'
import TabMaker from './Tabs/Tabs'
import Overlay from './Overlay/Overlay'
import style from './theme.styl'

// Exports
export default class Theme extends React.Component {
	constructor(props) {
    super(props);
    this.jumboTxt = {
      title : 'Theme / Style-Guide',
      body : 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.'
    }
  }
  render() {
    return (
      <div className={style.theme} role="main">
        <HeroArea titleTxt={this.jumboTxt.title} bodyTxt={this.jumboTxt.body} />
        <div className="container">
          <Row>
            <p>Example of a stateful component : <Counter /></p>
          </Row>
          <Row>
            <Companies source="json/companies.json"  />
          </Row>
          <Row>
             <TabMaker />
          </Row>
          <Row>
            <Overlay />
          </Row>
        </div>
      </div>
    )
  }
}
