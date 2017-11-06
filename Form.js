import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
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
      let defaultValues = {
        key: item.name,
        style: item.style || {},
        label: item.label || '',
        className: item.className || ''
      }
      
      return React.cloneElement(this.props.containerRenderer, {...defaultValues}, this.renderFields(item.fields, data, onChange));
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
          const textProps = {...defaultValues};
          validatorRenderer = this.validator.message(item.name, data[item.name], this.props.validatorTypes[item.name]);
          this.props.textInputRenderer ? itemRenderer = React.cloneElement(this.props.textInputRenderer, textProps) : itemRenderer = React.cloneElement(<input type="text" />, textProps); 
          break;
        case 'password':
            const passwordProps = {...defaultValues};
            this.props.passwordRenderer ? itemRenderer = React.cloneElement(this.props.fieldRenderer, {key: item.name}, React.cloneElement(this.props.passwordRenderer, passwordProps)) : itemRenderer = React.cloneElement(<section />, {key: item.name}, React.cloneElement(<input type="password" />, passwordProps))
            break;
        case 'passwordChange':
            const passwordChangeProps = {...defaultValues};
            const passwordConfirmProps = {...defaultValues, name:item.name+'_confirm', key: item.name+'_confirm'};
            this.props.passwordRenderer ? itemRenderer = React.cloneElement(this.props.fieldRenderer, {key: item.name}, [React.cloneElement(this.props.passwordChangeProps, passwordProps, React.cloneElement(this.props.passwordChangeProps, passwordProps))]) : itemRenderer = React.cloneElement(this.props.fieldRenderer, {key: item.name}, [React.cloneElement(<input type="password" />, passwordChangeProps), React.cloneElement(<input type="password" />, passwordConfirmProps)]);
            break;
        case 'submit':
          //RENDER DIRECTLY A BUTTON
          const buttonProps = {...defaultValues, value: item.label || '', onClick: () => this.handleFormSubmit(data)};
          return this.props.buttonRenderer ? itemRenderer = React.cloneElement(this.props.buttonRenderer, buttonProps) :  itemRenderer = React.cloneElement(<input type="submit" />, buttonProps);
        default: return null;
      }

      //RETURN A DEFAULT FIELD CONTAINER WITH A COMPONENT CONTENT RENDERER
      return this.props.fieldRenderer ? React.cloneElement(this.props.fieldRenderer, {key: item.name}, [itemRenderer, validatorRenderer]) : React.cloneElement(<section />, {key: item.name}, [itemRenderer, validatorRenderer]);
    })
  }

  render() {
      return (
        <Attire>
            {(data, onChange) => this.renderContainers(data, onChange)}
        </Attire>
      )
  }
}

  
