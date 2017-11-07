import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import FormToolsValidator from './validator';

import { Attire, validate } from 'react-attire'

const validateMyForm = validate({ email: v => v && v.length > 3 });

class Form extends PureComponent({
  defaultFieldRender: <section />
}) {
  constructor(props) {
    super(props);

    this.validator = new FormToolsValidator();
  }

  handleFormSubmit(data) {

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
      let defaultValues = {
        key: item.name,
        style: item.style || {},
        label: item.label || '',
        className: item.className || ''
      }
      let containerRenderer;
      if (this.props.containerRenderer) containerRenderer = this.props.containerRenderer;
      containerRenderer = <div />;
      return React.cloneElement(containerRenderer, {...defaultValues}, this.renderFields(item.fields, data, onChange));
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
      validatorRenderer = this.validator.message(item.name, data[item.name], this.props.validatorTypes[item.name], data);

      switch(item.type) {
        case 'email':
        case 'text':
          const textProps = {...defaultValues};
          this.props.textInputRenderer ? 
            itemRenderer = React.cloneElement(this.props.textInputRenderer, textProps) : 
            itemRenderer = React.cloneElement(<input type="text" />, textProps); 
        break;
        case 'password':
          const passwordProps = {...defaultValues};
          this.props.passwordRenderer ? 
            itemRenderer = React.cloneElement(this.props.passwordRenderer, passwordProps) : 
            itemRenderer = React.cloneElement(<input type="password" />, passwordProps);
        break;
        case 'passwordChange':
          const passwordChangeProps = {...defaultValues};
          const passwordConfirmProps = {...defaultValues, placeholder:'Password Confirm', name:item.name+'_confirm', key: item.name+'_confirm'};
          let fieldRenderer;
          this.props.fieldRenderer ? fieldRenderer = this.props.fieldRenderer : fieldRenderer = defaultFieldRender;

          this.props.passwordRenderer ? 
          itemRenderer = React.cloneElement(fieldRenderer, {key: item.name+'_container'}, [React.cloneElement(this.props.passwordRenderer, passwordChangeProps), React.cloneElement(this.props.passwordRenderer, passwordConfirmProps)]) : 
          itemRenderer = React.cloneElement(fieldRenderer, {key: item.name+'_container'}, [React.cloneElement(<input type="password" />, passwordChangeProps), React.cloneElement(<input type="password" />, passwordConfirmProps)]);

                  break;
        case 'submit':
          //RENDER DIRECTLY A BUTTON
          const buttonProps = {...defaultValues, value: item.label || '', onClick: () => this.handleFormSubmit(data)};
          this.props.buttonRenderer ? 
            itemRenderer = React.cloneElement(this.props.buttonRenderer, buttonProps) : 
            itemRenderer = React.cloneElement(<input type="submit" />, buttonProps);
        break;
        default: return null;
      }
      //RETURN A DEFAULT FIELD CONTAINER WITH A COMPONENT CONTENT RENDERER
      return this.props.fieldRenderer ? React.cloneElement(this.props.fieldRenderer, {key: item.name}, [itemRenderer, validatorRenderer]) : React.cloneElement(defaultFieldRender, {key: item.name}, [itemRenderer, validatorRenderer]);
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

Form.propTypes = {
  fields: PropTypes.array,
  validatorTypes: PropTypes.object,
  onSubmit: PropTypes.func
}

export default Form;