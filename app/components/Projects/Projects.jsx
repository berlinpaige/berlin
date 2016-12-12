// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'
import projectData from './projectData'


// Modules
import style from './projects.styl'
import ProjectSelector from '../ProjectSelector/ProjectSelector'

// Exports
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProjectSelector data={projectData}/>
  }
}
