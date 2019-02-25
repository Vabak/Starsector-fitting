import React, { Component } from 'react';
import SelectionList from '../SelectionList/SelectionList'
import PreviewList from '../PreviewList/PreviewList'

class SelectionPage extends Component {
    state = {}
    render() { 
        return (
            <div>
                <SelectionList />
                <PreviewList />
            </div>
        );
    }
}
 
export default SelectionPage;