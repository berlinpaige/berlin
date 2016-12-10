// React Deps
import React from 'react'

// Modules
import NavMain from './NavMain/NavMain'
import Home from './Home/Home'

import style from '../styles/app.styl'

// Main App Class
export default React.createClass({
  render() {
    return (
      <div id={style.app}>
        <NavMain />
        {this.props.children || <Home/>}
      </div>
    )
  }
})
