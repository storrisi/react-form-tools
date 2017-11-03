import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextInputField extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {placeholder, className} = this.props;

    return (
            <input
              type="text"
              placeholder={placeholder}
              className={className}
            />
    );
  }
}
