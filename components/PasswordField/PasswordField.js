import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {placeholder, password,  showPasswordConfirm, passwordConfirm, onPwdChange, onPwdConfirmChange, pwdErrorText, pwdConfirmErrorText} = this.props;

    return <View>
      <TextInput 
        secureTextEntry={true} 
        name="password"
        placeholder={placeholder}
        value={password}
        onChange={onPwdChange}
        errorText={pwdErrorText} />
      {showPasswordConfirm ? <TextInput 
        secureTextEntry={true} 
        name="passwordConfirm"
        placeholder={placeholder}
        value={passwordConfirm}
        onChange={onPwdConfirmChange}
        errorText={pwdConfirmErrorText} />: null}
    </View>;
  }
}
