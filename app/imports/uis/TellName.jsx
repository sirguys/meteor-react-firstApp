import React from 'react';

export default class TellName extends React.Component {  
  render() {
    return (
      <section>
        <h2>Your name is: { this.props.myName }</h2>
        <h2>How old are you? I'm { this.props.myAge }</h2>
      </section>
    );
  }
}

//Validation
TellName.propTypes = {
  myName: React.PropTypes.string.isRequired,
  myAge: React.PropTypes.string.isRequired
}
