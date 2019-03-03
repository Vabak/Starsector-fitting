import React, { Component } from 'react';
import SelectionList from '../SelectionList/SelectionList'
import PreviewList from '../PreviewList/PreviewList'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 3;
`;


class SelectionPage extends Component {
    state = {}
    render() { 
        return (
            <div style={{display: 'flex', height: '100%'}}>
                <SelectionList />
                <Container>
                    <PreviewList />
                    <div />
                </Container>
            </div>
        );
    }
}
 
export default SelectionPage;