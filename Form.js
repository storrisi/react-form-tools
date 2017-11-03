import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import TextInputField from './components/TextInputField';
import PasswordField from './components/PasswordField';
import RaisedButton from './components/Buttons/RaisedButton';
import ContainerField from './components/ContainerField';
import FormToolsValidator from './validator';

import { Attire, validate } from 'react-attire'

const validateMyForm = validate({ email: v => v && v.length > 3 });

export default class Form extends PureComponent {
  static propTypes = {
    fields: PropTypes.array,
    validatorTypes: PropTypes.object,
    onSubmit: PropTypes.func
  }
  constructor(props) {
    super(props);

    this.validator = new FormToolsValidator();
  }

  handleFormSubmit = (data) => {

    validateMyForm(data)
    .then(() => {
        console.log('All good!')
        this.props.onSubmit(data);
    })
    .catch(validationStatus => {
        console.error('Validation error', validationStatus)
    })
  }

  renderContainers(data, onChange) {
    return this.props.fields.map((item) =>{
      if(item.direction) {
        switch(item.direction) {
          case 'row': item.style['flexDirection'] = 'row'; break;
          case 'column': item.style['flexDirection'] = 'column'; break;
        }  
      }
      let defaultValues = {
        key: item.name,
        style: item.style || {},
        label: item.label || '',
        className: item.className || ''
      }
      return <ContainerField {...defaultValues} renderFields={(data, onChange) => this.renderFields(item.fields, data, onChange)}/>
    });
  }

  renderFields(fields, data, onChange) {    
    return fields.map((item) =>{
      let defaultValues = {
        key: item.name,
        style: item.style || {},
        placeholder: item.placeholder || '',
        label: item.label || '',
        className: item.className || ''
      }

      switch(item.type) {
        case 'email':
        case 'text':
          return <section key={item.name}>
            <TextInputField {...defaultValues}  />
            {this.validator.message(item.name, data[item.name], this.props.validatorTypes[item.name])}
          </section>
        case 'password':
          return <PasswordField {...defaultValues} showPasswordConfirm={false} />
        case 'passwordChange':
          return <PasswordField {...defaultValues} showPasswordConfirm={true} />
        case 'submit':
          return <RaisedButton key={item.name} title={item.label} onPress={() => this.handleFormSubmit(data)} backgroundColor={'white'} />
        default: return null;
      }
    })
  }

  render() {
      const {fields} = this.props;
      
      return (
        <Attire>
            {(data, onChange) => this.renderContainers(data, onChange)}
        </Attire>
      )
  }
}

  
