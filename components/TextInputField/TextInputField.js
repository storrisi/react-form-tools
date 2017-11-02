import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, Platform } from 'react-native';
import { getKeyboardType } from '../../utils/methods';

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
    const keyboardType = getKeyboardType(attributes.type);
    console.log(attributes);
    return (
            <TextInput
              ref={(c) => { this.textInput = c; }}
              secureTextEntry={attributes.secureTextEntry || attributes.type === 'password'}
              placeholder={attributes.label}
              blurOnSubmit={false}
              onSubmitEditing={() => this.props.onSubmitTextInput(this.props.attributes.name)}
              placeholderTextColor={theme.inputColorPlaceholder}
              editable={attributes.editable}
              value={attributes.value && attributes.value.toString()}
              keyboardType={keyboardType}
              onChangeText={text => this.handleChange(text)}
              {...inputProps}
            />
    );
  }
}
