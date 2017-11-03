import React, {Component} from 'react';

export default class RaisedButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {label, onPress} = this.props;

    return <section>
      <input type="button" value="Submit" onClick={onPress} />
    </section>;
  }
}
