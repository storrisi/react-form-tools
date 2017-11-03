import React, {Component} from 'react';

export default class RaisedButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {label, className, onPress} = this.props;

    return <section className={className}>
      <input type="button" value="Submit" onClick={onPress} />
    </section>;
  }
}
