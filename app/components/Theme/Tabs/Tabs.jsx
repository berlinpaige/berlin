// Deps
import React from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'

// Modules
import style from './tabs.styl'

export default class TabMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSelect(key) {
    this.setState({key});
  }

  render() {
    return (
      <Tabs className= {style.tabmaker} activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab className= {style.tab} eventKey={1} title="Tab 1"><p>Crispin Porter and Bogusky is the Best agency in the World!</p></Tab>
        <Tab className= {style.tab} eventKey={2} title="Tab 2"><p>Anyone up for an Avery run?</p></Tab>
        <Tab className= {style.tab} eventKey={3} title="Tab 3" disabled><p>Tab 3 content</p></Tab>
      </Tabs>
    );
  }
}
