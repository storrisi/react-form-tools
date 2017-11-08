# React Form Renderer

A simple and fast library to build Forms starting from a json schema.
You can use the built-in renderer of each element, or passing the UI-Kit of your own.

The library has also a validator system based on [simple-react-validator](https://github.com/dockwa/simple-react-validator/) 
# Install and Save

```shell
npm install react-form-renderer --save
```

# Using Example
```
<Form
  textInputRenderer = {<input type="text" />}
  buttonRenderer = {<input type="submit" />}
  fieldRenderer = {<div />}
  containerRenderer = {<div />}
  validatorRenderer = {<div />}
  fields={[
    {
      type: 'container', //Required
      name: 'container-1', //Optional
      fields: [
        {
            type: 'container', //Required
            name: 'container-1', //Optional
            fields: [
                {
                    type: 'text', //Required
                    name: 'username', //Required
                    placeholder:'Username', //Optional
                },
                {
                    type: 'password', //Required
                    name: 'password', //Required
                    placeholder:'Password', //Optional
                }
            ]
        }
      ]
    },
    {
      type: 'container', //Required
      name: 'container-2', //Required
      className: '', //Optional
      fields: [
        {
          type: 'submit', //Required
          name: 'submit', //Required
          placeholder:'Login', //Optional
        }
      ]
    } 
  ]}

  onSubmit = {() => console.log('onSubmit')}
    
  validatorTypes={{
    username: 'required',
    password: 'required|password'
  }}

  validatorMessages={{
    username: {
      required: 'This is a custom message for mandatory fields'
    },
    password: {
      required: 'This is a custom message for mandatory fields',
      password: 'This is a custom message for wrong validation error'
    }
  }}
/>
```

## Class Properties

To initialize a Form Renderer component, you need to define these properties

| Property        | Options      | Description                                              |
|-----------------|--------------|----------------------------------------------------------|
|fields           | required     | An Array of Json Object containing the structure of your form. Each element of the Array is a different container (like rows), with the defined fields as childs.                    |
|validatorTypes   | optional     | A Json Object describing the type of validation for each field. See description above.|
|validatorMessages| optional     | A Json Object containing the matching custom message for each validation error.|
|onSubmit         | required     | The function called to submit the form into your specifical process.                   |

##Item Renderers

You can also define a custom renderer for each single component, instead of using the default renderers.

Here is the list of the customizable components:

| Component        | Options      | Description                                              |
|------------------|--------------|----------------------------------------------------------|
|textInputRenderer |              | Used for rendering simple Text Fields                    |
|passwordRenderer  |              | Used for rendering a Password Field.                     |
|buttonRenderer    |              | Used for rendering a simple Button                       |
|submitRenderer    |              | Used for rendering the Submit Button of the Form         |
|containerRenderer |              | This renderer is used for styling purposes. If you need to put two or more fields on the same row, you can wrap into the same Container Renderer and give it the appropriate style or classname                 |
|fieldRenderer     |              | As for the Container Renderer, specially if you have to show a field and a validator string togheter, with this renderer you can apply your own style.                |
|validatorRenderer |              | Used for rendering the validator error message           |

Each renderer can be defined with your own properties, they will added to the item renderer as well.

## Field Properties

Eeach field comes up with these properties
| Property        | Options      | Description                                              |
|-----------------|---------------|----------------------------------------------------------|
|type             |      required      | Used for rendering simple Text Fields                    |
|name             |      required      | Used for rendering simple Text Fields                    |
|placeholder      |      optional      | Used for rendering simple Text Fields                    |
|style            |      optional      | Used for rendering simple Text Fields                    |
|className        |      optional      | Used for rendering simple Text Fields                    |

## Validation Rules
This is the list of all the rules you can validate form inputs against. 
When using multiple rules, separate them with a pipe `|`. 
When adding options, append a colon to the rule and separate options with commas. 

Examples: `'required|min:20|max:120'` and `'required|in:stu,stuart,stuyam'`

| Rules        | Options      | Description                                              |
|--------------|--------------|----------------------------------------------------------|
|accepted      |              | If 'true', good for required check boxes.                |
|alpha         |              | Must have only letters.                                  |
|alpha_num     |              | Must have only letters and numbers.                      |
|alpha_num_dash|              | Must have only letters, numbers, dashes, and underscores.|
|card_exp      |              | Must have only a valid credit card expiration date.      |
|card_num      |              | Must have only a valid credit card number.               |
|email         |              | Must have only a valid email address.                    |
|gt            |30            | Must be greater than value.                              |
|gte           |25.39         | Must be greater than or equal to value.                  |
|in            |stu, chris, hi| Must be one of the provided options.                     |
|integer       |              | Must have only an integer.                               |
|lt            |193.3         | Must be less than value.                                 |
|lte           |55            | Must be less than or equal to value.                     |
|max           |120           | Must have less than X number of character.               |
|min           |40            | Must have more than X number of characters.              |
|not_in        |john, max     | Must not be one of the provided options.                 |
|phone         |              | Must be a valid phone number.                            |
|required      |              | Must be present, use with other rules to require them.   |
|url           |              | Must be a valid url.                                     |

## Custom Rules

You can write custom rules that you can use the validate. A rule is comprised of 3 parts; the name, the message, and the rule itself.


## Custom Error Messages

The fifth parameter is an object. The keys correspond to the rule names.
If you use the key 'default' then that will be used for all errors that do not have custom errors set.

## Buttons out of the box

Maybe you need to put your own buttons anywhere in your layout, so you don't really want to render a button inside the Form, just to access to the actions.

We exposed simple functions to achieve this, using `ref` param.

The first thing you need to do is to put a property `ref = "formName"` in your form renderer.
Then, you can call directly the submitAction() calling `this.refs.form.submitAction();`
