import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../stores/actions/filters';
import styled from 'styled-components';
import Button from '../../../UI/Button';

import Select from './Select/Select';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: gray;
    min-height: 100%;
    padding-top: ${({show}) => show ? "5px" : "0"};
    width: ${({show}) => show ? "180px" : "0"};
    overflow-x: hidden;
    transition: 0.2s
`;


class ShipFilters extends Component {
  state = {
    styleValue: '',
    hullSizeValue: '',
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.styleValue !== this.state.styleValue ||
        prevState.hullSizeValue !== this.state.hullSizeValue ) {
      this.fetchShips()
    }
  }

  componentDidMount() {
    this.props.onFetchFilters( 'styleOptions', 'filters/ships/style' )
    this.props.onFetchFilters( 'hullSizeOptions', 'filters/ships/hull_size' )
    this.fetchShips()
  }

  fetchShips() {
    let param = 'ships/';
    const { styleValue, hullSizeValue } = this.state;

    if ( !!( styleValue && hullSizeValue ) ) {
      param += '?hull_size=' + hullSizeValue + '&style=' + styleValue;
    } else if ( styleValue || hullSizeValue ) {
      param += '?' + ( hullSizeValue ? 'hull_size=' + hullSizeValue
          : 'style=' + styleValue );
    }
    this.props.onFetchShips( param );
  }

  onSelect = ( e, selectType ) => {
    if ( selectType === 'style' ) {
      this.setState( { styleValue: e.target.value } )
    }
    if ( selectType === 'hull size' ) {
      this.setState( { hullSizeValue: e.target.value } )
    }
  }


  render() {
    return (
        <StyledDiv show={ this.props.isShow }>
          <Button buttonClickHandler={ this.props.buttonHandler } buttonArg={this.props.isShow}>Close</Button>
          <Select onSelect={ this.onSelect } type='style' options={ this.props.styleOptions }/>
          <Select onSelect={ this.onSelect } type='hull size' options={ this.props.hullSizeOptions }/>
        </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    styleOptions: state.filters.styleOptions,
    hullSizeOptions: state.filters.hullSizeOptions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShips: ( param ) => dispatch( actions.fetchShipsByParam( param ) ),
    onFetchFilters: ( name, url ) => dispatch( actions.fetchFilters( name, url ) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ShipFilters );
