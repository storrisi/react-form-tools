import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FieldContainer extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const {style, className, itemRenderer, validatorRenderer} = this.props;
        
        return (
            <section style={style} className={className}>
                {itemRenderer}
                {validatorRenderer}
            </section>
        );
    }
}
