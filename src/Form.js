import PropTypes from 'prop-types';
import React, {Component} from 'react';
import FormToolsValidator from './validator';
import { Attire } from 'react-attire';

class Form extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormToolsValidator();
    
    this.submitAction = () => {
      this.handleFormSubmit(this.state.data);
    }

    this.state = {
			data: { ...props.values }
		}
  }

  componentWillReceiveProps(newProps) {
    this.setState({data: {...newProps.values}})
  }

	handleFormValueChange = (...args) => {
		const { callBacks } = this.props

		let delta = {}
		if (args.length === 1) {
			const [event] = args
			const { name, type, checked, value } = event.target

			delta = {
				[name]: type === 'checkbox' ? checked : value
      }

      if (callBacks[name]) {
        callBacks[name](delta[name]);
      }
		}

		if (args.length === 2) {
			const [name, value] = args

			delta = {
				[name]: value
      }

      if (callBacks[name]) {
        callBacks[name](delta[name]);
      }
    }

		this.setState(state => {
			const data = { ...state.data, ...delta }

			return { data }
		})
	}

	handleFormReset = () => {
		const { initial, onChange } = this.props

		this.setState(state => {
			if (onChange) {
				onChange({ ...initial })
			}

			return { data: { ...initial } }
		})
	}

  handleFormSubmit(data) {
    if( this.validator.allValid() ){
        this.props.onSubmit( this.validator.cleanData(data) );
    } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        this.forceUpdate();
    }
  }

  renderContainers(data, onChange) {
    return this.props.fields.map((item) =>{
      let defaultValues = item;
      defaultValues.key = item.name;
      defaultValues.onChange = this.handleFormValueChange;

      return React.cloneElement(this.props.containerRenderer, {...defaultValues}, this.renderFields(item.fields, data, onChange));
    });
  }

  renderFields(fields, data, onChange) {  
    let itemRenderer, validatorRenderer = null, validatorRendererConfirm = null;
    
    return fields.map((item) =>{
      let defaultValues = item;
      defaultValues.key = item.name;
      defaultValues.onChange = this.handleFormValueChange;
      defaultValues.value = data[item.name];
      
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
          
          let field_confirm = item.name+'_confirm';
          const passwordConfirmProps = {...defaultValues, placeholder:'Password Confirm', name:field_confirm, key: field_confirm};
          validatorRendererConfirm = this.validator.message(field_confirm, data[field_confirm], this.props.validatorTypes[field_confirm], data);
          
          itemRenderer = React.cloneElement(this.props.fieldRenderer, {key: item.name+'_container'}, [React.cloneElement(this.props.passwordRenderer, passwordChangeProps), React.cloneElement(this.props.passwordRenderer, passwordConfirmProps)]);
        break;
        
        case 'checkbox':
          const checkboxProps = {...defaultValues};
          itemRenderer = React.cloneElement(this.props.checkBoxRenderer, checkboxProps);
        break;
        
        case 'submit':
          //RENDER DIRECTLY A BUTTON
          const buttonProps = {...defaultValues, value: item.label || '', onClick: () => this.handleFormSubmit(data)};
          itemRenderer = React.cloneElement(this.props.buttonRenderer, buttonProps);
        break;
        default: 
          if (item.renderer) {
            const rendererProps = {...defaultValues};
            itemRenderer = React.cloneElement(item.renderer, rendererProps);
          } else return null;
        break;
      }
      //RETURN A DEFAULT FIELD CONTAINER WITH A COMPONENT CONTENT RENDERER
      return React.cloneElement(this.props.fieldRenderer, {key: item.name}, [itemRenderer, validatorRenderer, validatorRendererConfirm]);
    })
  }
  render() {
      return this.renderContainers(this.state.data, this.props.onChange);
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
  submitRenderer: PropTypes.element,
  checkBoxRenderer: PropTypes.element,
  values: PropTypes.object,
  callBacks: PropTypes.object
}
Form.defaultProps = {
  containerRenderer: <div />,
  fieldRenderer: <section />,
  passwordRenderer: <input type="password" />,
  textInputRenderer: <input type="text" />,
  buttonRenderer: <input type="button" />,
  submitRenderer: <input type="submit" />,
  checkBoxRenderer: <input type="checkbox" />
};
export { Form }
