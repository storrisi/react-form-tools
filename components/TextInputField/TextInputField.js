import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TextInputField extends Component {
  static propTypes = {
    attributes: PropTypes.object,
    theme: PropTypes.object,
    updateValue: PropTypes.func,
    onSubmitTextInput: PropTypes.func,
    ErrorComponent: PropTypes.func,
  }
  handleChange(text) {
    this.props.updateValue(this.props.attributes.name, text);
  }
  render() {
    const { theme, attributes, ErrorComponent } = this.props;
    const inputProps = attributes.props;
    return (
            <input
              type="text"
              ref={(c) => { this.textInput = c; }}
              placeholder={attributes.label}
              value={attributes.value && attributes.value.toString()}
              onChangeText={text => this.handleChange(text)}
              {...inputProps}
            />
    );
  }
}
