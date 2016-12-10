// Deps
import React from 'react'
import { Button } from 'react-bootstrap'

// Modules
import style from './counter.styl'

// Exports
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
    this.css = {
      button : style.counter
    }
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <Button bsStyle="primary" className={this.css.button} onClick={this.tick}>
        Click Me : {this.state.count}
      </Button>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number }
Counter.defaultProps = { initialCount: 0 }
