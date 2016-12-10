// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import HeroArea from '../HeroArea/HeroArea'
import style from './home.styl'

// Exports
export default class Home extends React.Component {
	constructor(props) {
    super(props);
    this.jumboTxt = {
      title : 'ReactJS Boilerplate',
      body : 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.'
    }
  }
  render() {
    return (
      <div className={style.theme} role="main">
        <HeroArea titleTxt={this.jumboTxt.title} bodyTxt={this.jumboTxt.body}/>
        <div className="container">
          <Row>
            <Col md={6}>
              <h1>Philisophy and Goals</h1>
              <ul>
                <li>Convention over configuration</li>
                <li>True components</li>
                <li>Keep state out of the DOM</li>
                <li>Immutability</li>
                <li>Ultra DRY development</li>
              </ul>
            </Col>
            <Col md={6}>
              <h1>Roadmap</h1>
              <ul>
                <li>Linting &amp; JSDocs</li>
                <li>Flux &amp; Redux Implementation</li>
                <li>Unit Testing</li>
                <li>End-to-end "Mock" Testing</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
