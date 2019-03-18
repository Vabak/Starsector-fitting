import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../stores/actions/filters';
import styled from 'styled-components';

import Select from '../components/Select';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: gray;
    min-height: 100%;
    padding: 30px 5px;
`;

class Filters extends Component {
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
        this.props.onFetchFilters('styleOptions', 'filters/ships/style')
        this.props.onFetchFilters('hullSizeOptions', 'filters/ships/hull_size')  
        this.fetchShips()
    }

    fetchShips() {
        let param = 'ships/';
        const { styleValue, hullSizeValue } = this.state;

        if ( !!( styleValue && hullSizeValue )) {
            param += '?hull_size=' + hullSizeValue + '&style=' + styleValue;
        } else if (styleValue || hullSizeValue) {
            param += '?' + ( hullSizeValue ? 'hull_size=' + hullSizeValue
                                           : 'style=' + styleValue ); 
        }
        this.props.onFetchShips( param );
    }

    onSelect = ( e, selectType ) => {
        if ( selectType === 'style' ) {
            this.setState({ styleValue: e.target.value })
        }
        if ( selectType === 'hull size' ) {
            this.setState({ hullSizeValue: e.target.value })
        }
    }

    render() {
        return (
            <StyledDiv>
                <Select onSelect={this.onSelect} type='style' options={this.props.styleOptions} />
                <Select onSelect={this.onSelect} type='hull size' options={this.props.hullSizeOptions} />
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
        onFetchShips: ( param ) => dispatch(actions.fetchShipsByParam( param )),
        onFetchFilters: ( name, url ) => dispatch(actions.fetchFilters( name, url ))
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Filters );
