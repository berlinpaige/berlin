// Deps
import React from 'react';

// Exports
export default class HelloMessage extends React.Component {
  render() {
    return <h1>{this.props.titleTxt}!</h1>;
  }
}
