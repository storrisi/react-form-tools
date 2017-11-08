import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import FormToolsValidator from './validator';
import { Attire, validate } from 'react-attire'

const validateMyForm = validate({ email: v => v && v.length > 3 });

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.validator = new FormToolsValidator();
    
    this.submitAction = () => {
      this.handleFormSubmit(this.refs.formAttire.state.data);
    }
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
      let defaultValues = item;
      defaultValues.key = item.name;
      defaultValues.onChange = onChange;

      return React.cloneElement(this.props.containerRenderer, {...defaultValues}, this.renderFields(item.fields, data, onChange));
    });
  }
  renderFields(fields, data, onChange) {  

    let itemRenderer, validatorRenderer = null;
    
    return fields.map((item) =>{
      let defaultValues = item;
      defaultValues.key = item.name;
      defaultValues.onChange = onChange;
      
      itemRenderer = null;
      validatorRenderer = this.validator.message(item.name, data[item.name], this.props.validatorTypes[item.name], data);
      switch(item.type) {
        case 'email':
        case 'text':
          const textProps = {...defaultValues};
          itemRenderer = React.cloneElement(this.props.textInputRenderer, textProps);
        break;
        case 'password':
          const passwordProps = {...defaultValues};
          itemRenderer = React.cloneElement(this.props.passwordRenderer, passwordProps);
        break;
        case 'passwordChange':
          const passwordChangeProps = {...defaultValues};
          const passwordConfirmProps = {...defaultValues, placeholder:'Password Confirm', name:item.name+'_confirm', key: item.name+'_confirm'};
          itemRenderer = React.cloneElement(this.props.fieldRenderer, {key: item.name+'_container'}, [React.cloneElement(this.props.passwordRenderer, passwordChangeProps), React.cloneElement(this.props.passwordRenderer, passwordConfirmProps)]);
          break;
        case 'submit':
          //RENDER DIRECTLY A BUTTON
          const buttonProps = {...defaultValues, value: item.label || '', onClick: () => this.handleFormSubmit(data)};
          itemRenderer = React.cloneElement(this.props.buttonRenderer, buttonProps);
        break;
        default: return null;
      }
      //RETURN A DEFAULT FIELD CONTAINER WITH A COMPONENT CONTENT RENDERER
      return React.cloneElement(this.props.fieldRenderer, {key: item.name}, [itemRenderer, validatorRenderer]);
    })
  }
  render() {
      return (
        <Attire ref="formAttire">
            {(data, onChange) => this.renderContainers(data, onChange)}
        </Attire>
      )
  }
}
Form.propTypes = {
  fields: PropTypes.array,
  validatorTypes: PropTypes.object,
  onSubmit: PropTypes.func,
  containerRenderer: PropTypes.element,
  fieldRenderer: PropTypes.element,
  passwordRenderer: PropTypes.element,
  textInputRenderer: PropTypes.element,
  buttonRenderer: PropTypes.element,
  submitRenderer: PropTypes.element
}
Form.defaultProps = {
  containerRenderer: <div />,
  fieldRenderer: <section />,
  passwordRenderer: <input type="password" />,
  textInputRenderer: <input type="text" />,
  buttonRenderer: <input type="button" />,
  submitRenderer: <input type="submit" />
};
export { Form }