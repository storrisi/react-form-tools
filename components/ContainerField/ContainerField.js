import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ContainerField extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const {label, style, className, renderFields} = this.props;
        
        return (
            <div style={style} className={className}>
                <div>{label}</div>
                <div>{renderFields()}</div>
            </div>
        );
    }
}
