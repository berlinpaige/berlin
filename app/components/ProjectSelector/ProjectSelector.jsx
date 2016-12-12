// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import style from './projectSelector.styl'
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay'


// Exports
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'all'
    };
  }

  buttonOneClicked() {
    this.setState({selected: 'all'})
  }

  buttonTwoClicked() {
    this.setState({selected: 'personal'})
  }

  buttonThreeClicked() {
    this.setState({selected: 'professional'})
  }

  render() {
    return (
      <div>
        <div className={style.projectSelector}>
          <Button onClick={this.buttonOneClicked.bind(this)}>all</Button>
          <Button onClick={this.buttonTwoClicked.bind(this)}>personal</Button>
          <Button onClick={this.buttonThreeClicked.bind(this)}>professional</Button>
        </div>
        <ProjectDisplay projectData={this.props.data} projectDisplayState={this.state.selected}/>
      </div>
    )
  }
}