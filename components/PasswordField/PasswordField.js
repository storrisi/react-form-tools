import PropTypes from 'prop-types';
import React from 'react';

export default function PasswordField({
  name,
  style = {},
  className = '',
  placeholder = '',
  onChange = f => f,
  showPasswordConfirm
}) {
  return (
    <section style={style} className={className}>
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
    </section>
  );
}

PasswordField.propTypes = {
  style: PropTypes.object,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  showPasswordConfirm: PropTypes.bool
}


