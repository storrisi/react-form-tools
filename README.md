# react-form-tools
A set of Tools for building Forms in React

```
<Form fields={[
  {
    type: 'container', //Obbligatorio
    name: 'container-1', //Facoltativo
    label: 'Contenitore campi', //Facoltativo
    style: {display:'flex'}, //Facoltativo
    className: '', //Facoltativo
    direction: 'row', //Facoltativo
    fields: [
      {
        type: 'text', //Obbligatorio
        name: 'user_name', //Obbligatorio
        placeholder:'Username', //Facoltativo
        required: true,
        icon: 'ios-person', //Facoltativo
        label: 'Username', //Facoltativo
        style: {}, //Facoltativo
        className: '' //Facoltativo
      },
      {
        type: 'passwordChange', //Obbligatorio
        name: 'password', //Obbligatorio
        placeholder:'Password', //Facoltativo
        icon: 'ios-lock', //Facoltativo
        required: true,
        label: 'Password', //Facoltativo
        style: {} //Facoltativo
      }
    ]
  },
  {
    type: 'container', //Obbligatorio
    name: 'container-2', //Obbligatorio
    label: 'Contenitore Bottoni', //Facoltativo
    style: {display:'flex'}, //Facoltativo
    className: '', //Facoltativo
    direction: 'row', //Facoltativo
    fields: [
      {
        type: 'submit', //Obbligatorio
        name: 'submit', //Obbligatorio
        placeholder:'submit', //Facoltativo
        label: 'submit', //Facoltativo
        onSubmit: () => console.log('onSubmit')
      }
    ]
  } 
]} />
```
