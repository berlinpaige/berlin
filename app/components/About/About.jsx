// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import style from './about.styl'

// Exports
export default class About extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
    return (
      <div className={style.about} role="main">
        <div className="container">

          <Row>
            <Col md={4}>
              <h2><a href="http://brunch.io" target="_blank">Brunch.io</a></h2>
              <p>Is simply put, a FE build tool... to be specific, it is a pipeline. Basically, it allows us to replace a lot of the nastiest that comes along with many task-runners used for builds and workflow automation.</p>
              <p><Button href="http://brunch.io" target="_blank" role="button">View details &raquo;</Button></p>
            </Col>
            <Col md={4}>
              <h2><a href="https://facebook.github.io/react" target="_blank">ReactJS</a> + <a href="https://github.com/reactjs/react-router" target="_blank">React Router</a></h2>
              <p>Used for encapsulated view components that manage their own state. </p>
              <p><Button href="#" role="button">View details &raquo;</Button></p>
            </Col>
            <Col md={4}>
              <h2><a href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</a></h2>
              <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</p>
              <p><Button href="http://getbootstrap.com/" target="_blank" role="button">View details &raquo;</Button></p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={12}>
              <h2>Why CSS Modules?</h2>
              <p> Guarantees that ALL styles for a single component :</p>
              <ol>
                <li>Live in ONLY one place</li>
                <li>Apply ONLY to that specific component and nothing else</li>
              </ol>
              <p><strong>This approach solves the global scope CSS problem by enforcing LOCAL SCOPE BY DEFAULT</strong>, this forces developers to deliberately think about the consequences of each style</p>
              <h3>BEM Not Rquired</h3>
              <p>We don’t need to use BEM when we’re making a CSS module. This is for two reasons:</p>
              <ol>
                <li><strong>Easy parsing</strong> - Code like <code>type.display</code> is just as legible for developers as the BEM-y <code>.font-size__serif--large</code>. Likely even easier to mentally parse when the BEM selectors get long.</li>
                <li><strong>Local scope</strong> - Say we have a class like <code>.big</code> in one module where it changes the font-size. In another we use the exact same class <code>.big</code> that increases padding and font-size in a different amount. It simply doesn't matter! They won't conflict, because the styles are scoped very deliberately. Even if a module imports both stylesheets, then it has a custom name which our build process makes specifically for that class.<br/>In other words, <strong>specificity issues disappear with CSS Modules.</strong></li>
              </ol>
            </Col>
          </Row>

        </div>
      </div>
    )
  }
}
