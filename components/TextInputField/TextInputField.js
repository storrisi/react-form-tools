import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextInputField extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {placeholder, name, className, onChange} = this.props;

    return (
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              className={className}
              onChange={onChange}
            />
    );
  }
}
