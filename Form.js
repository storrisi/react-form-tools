import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import TextInputField from './components/TextInputField';
import PasswordField from './components/PasswordField';
import RaisedButton from './components/Buttons/RaisedButton';

import { Attire } from 'react-attire'

export default class Form extends PureComponent {
  static propTypes = {
    fields: PropTypes.array,
    onSubmit: PropTypes.func
  }
  constructor(props) {
    super(props);
  }

  renderFields(data, onChange) {
    
    return this.props.fields.map((item) =>{
      let defaultValues = {
        placeholder: item.placeholder,
        key: item.name,
        style: item.style,
        label: item.label
      }
      switch(item.type) {
      case 'text':
        return <TextInputField {...defaultValues} />
      case 'password':
        return <PasswordField {...defaultValues} showPasswordConfirm={false} />
      case 'passwordChange':
        return <PasswordField {...defaultValues} showPasswordConfirm={true} />
      case 'submit':
        return <RaisedButton key={item.name} title={item.label} onPress={() => this.props.onSubmit()} backgroundColor={'white'} />
      default: return null;
    }
    })
  }

  render() {
      const {fields} = this.props;

      return (
        <Attire>
            {(data, onChange) => this.renderFields(data, onChange)} aaa
        </Attire>
      )
  }
}

  
