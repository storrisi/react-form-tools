import React, {Component} from 'react';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {placeholder, password,  showPasswordConfirm, passwordConfirm, onPwdChange, onPwdConfirmChange, pwdErrorText, pwdConfirmErrorText, className} = this.props;

    return <section className={className}>
      <input 
        type="password"
        name="password"
        placeholder={placeholder}
        value={password}
        onChange={onPwdChange} />
      {showPasswordConfirm ? <input 
        type="password"
        name="passwordConfirm"
        placeholder={placeholder}
        value={passwordConfirm}
        onChange={onPwdConfirmChange} />: null}
    </section>;
  }
}
