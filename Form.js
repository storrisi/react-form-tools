import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import TextInputField from './components/TextInputField';
import PasswordField from './components/PasswordField';
import RaisedButton from './components/Buttons/RaisedButton';
import FormContainer from './components/Containers/FormContainer';
import FieldContainer from './components/Containers/FieldContainer';
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
    console.log(data);
    return this.props.fields.map((item) =>{
      /*if(item.direction) {
        switch(item.direction) {
          case 'row': item.style['flexDirection'] = 'row'; break;
          case 'column': item.style['flexDirection'] = 'column'; break;
        }  
      }*/
      let defaultValues = {
        key: item.name,
        style: item.style || {},
        label: item.label || '',
        className: item.className || ''
      }
      
      return <FormContainer {...defaultValues} renderFields={() => this.renderFields(item.fields, data, onChange)}/>
    });
  }

  renderFields(fields, data, onChange) {  
    
    let itemRenderer, validatorRenderer = null;

    return fields.map((item) =>{
      let defaultValues = {
        key: item.name,
        name: item.name,
        style: item.style || {},
        placeholder: item.placeholder || '',
        label: item.label || '',
        className: item.className || '',
        onChange: onChange
      }
      
      itemRenderer = null;
      validatorRenderer = null;

      switch(item.type) {
        case 'email':
        case 'text':
            validatorRenderer = this.validator.message(item.name, data[item.name], this.props.validatorTypes[item.name]);
            itemRenderer = <TextInputField {...defaultValues}  />;
            break;
        case 'password':
            itemRenderer = <PasswordField {...defaultValues} showPasswordConfirm={false} />;
            break;
        case 'passwordChange':
            itemRenderer = <PasswordField {...defaultValues} showPasswordConfirm={true} />;
            break;
        case 'submit':
          return <RaisedButton key={item.name} title={item.label} onPress={() => this.handleFormSubmit(data)} backgroundColor={'white'} />
          break;
        default: return null;
      }

      return <FieldContainer 
      key={item.name}
      validatorRenderer={validatorRenderer}
      itemRenderer={itemRenderer} />
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

  
