import React, {Component} from 'react';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {placeholder, name,  onChange, className, showPasswordConfirm} = this.props;

    return <section className={className}>
      <input 
        type="password"
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
      {showPasswordConfirm ? <input 
        type="password"
        name={name+"Confirm"}
        placeholder={placeholder}
        onChange={onChange} />: null}
    </section>;
  }
}
