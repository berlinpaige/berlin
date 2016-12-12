// Deps
import React from 'react';
import { Link } from 'react-router'
import { Button, Col, Row } from 'react-bootstrap'

// Modules
import style from './projectDisplay.styl'

var projectDisplayState = ''

// Exports
export default class ProjectDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: ['', '', '', ''],
      columnWidth: '80%'
    };
  }

  updateDimensions() {
    var _self = this
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight,
        newArray = [],
        colWidth = '',
        totalColumns = 1

    if (width < 700) {
      colWidth = '100%'
      totalColumns = 1
      newArray = [[]]
    }
    else if (width >= 700 && width < 1000) {
      colWidth = '50%'
      totalColumns = 2
      newArray = [[], []]
    }
    else if (width >= 1000 && width < 1300) {
      colWidth = 'calc(100%/3)'
      totalColumns = 3
      newArray = [[], [], []]
    }
    else if (width >= 1300 ) {
      colWidth = '25%'
      totalColumns = 4
      newArray = [[], [], [], []]
    }

    var columnIndex = 0;

    this.props.projectData.map(function(result) {
      if (_self.props.projectDisplayState == 'all' || result.projectType == _self.props.projectDisplayState) {
        newArray[columnIndex].push(result)
        columnIndex++;

        if (columnIndex == totalColumns) {
          columnIndex = 0;
        }
      }
    })

    this.setState({columns: newArray, columnWidth: colWidth})
  }

  createProjectContainers(data) {
    return (
      <div className={style.projectContainer}>
        <div className={style.project}>
          <img src={data.photo} className={style.projectHeroPhoto}/>
          <div className={style.projectInfo}>
            <p>{data.client}</p>
            <p>{data.description}</p>
            <a href={data.url}>{data.linkText}</a>
            <p>Technologies</p>
            <p>{data.technologies}</p>
            <p>Role</p>
            <p>{data.role}</p>
            <a href={data.url}>Find Out More</a>
          </div>
        </div>
      </div>
    )
  }

  createColumns(result, _self) {
    return (
      <div className={style.masonryColumn} style={{width: _self.state.columnWidth}}>
      {
        result.map(function(data) {
          return _self.createProjectContainers(data)
        })
      }
      </div>
    )
  }

  componentDidUpdate() {
    if (projectDisplayState != this.props.projectDisplayState) {
      projectDisplayState = this.props.projectDisplayState
      this.updateDimensions();
    }
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions).bind(this);
  }

  render() {
    var _self = this;

    return (
      <div>
        {
          this.state.columns.map(function(result) {
            return _self.createColumns(result, _self)
          })
        }
      </div>
    )
  }
}
