import React, { Component } from 'react';

import Filters from './ShipFilters/ShipFilters';
import ShipSelection from './ShipSelection/ShipSelection';
import Button from '../../UI/Button';


class SelectionPage extends Component {
  state = {
    isSidebarShow: true,
  };

  buttonHandler = () => {
    this.setState( ( prevState ) => {
      return { isSidebarShow: !prevState.isSidebarShow }
    } )
  };

  render() {
    return (
        <div style={ { display: 'flex', height: "100%" } }>
          <Filters
            buttonHandler = {this.buttonHandler}
            isShow={this.state.isSidebarShow}/>
          <Button
              position="absolute"
              buttonClickHandler={this.buttonHandler}
              buttonArg={!this.state.isSidebarShow}>Open</Button>
          <ShipSelection/>
        </div>
    );
  }
}

export default SelectionPage;
