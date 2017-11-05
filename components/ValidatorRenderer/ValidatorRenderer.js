import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ValidatorRenderer extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {style, className, message} = this.props;

    return (
            <div style={style} className={className}>
                {message}
            </div>
    );
  }
}