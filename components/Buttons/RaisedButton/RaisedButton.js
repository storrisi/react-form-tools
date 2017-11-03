import React, {Component} from 'react';

export default class RaisedButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {label} = this.props;

    return <section>
      <input type="button" value="Submit" />
    </section>;
  }
}
