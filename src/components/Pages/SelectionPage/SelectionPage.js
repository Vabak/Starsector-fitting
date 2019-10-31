import React, { Component } from 'react';
import styled from  'styled-components';

import Filters from './ShipFilters/ShipFilters';
import ShipSelection from './ShipSelection/ShipSelection';
import Button from '../../UI/Button';

const AbsPositionButton = styled(Button)`
  position: absolute;
  left: 20px;
`;

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
          <AbsPositionButton
              buttonClickHandler={this.buttonHandler}
              isShow={!this.state.isSidebarShow}>Open</AbsPositionButton>
          <ShipSelection/>
        </div>
    );
  }
}

export default SelectionPage;
