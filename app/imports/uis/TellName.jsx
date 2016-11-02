import React from 'react';

//Stateless function
const warning = (text) => {
  return `${text}!!!`
}

const TellNumber = (tel) => {
  return (
    <h2>Your number is {tel}</h2>
  );
}

export default class TellName extends React.Component {
  render() {
    return (
      <section>
        <h2>Your name is: { warning(this.props.myName) }</h2>
        <h2>How old are you? I'm { this.props.myAge }</h2>
        { TellNumber('0980146488') }
      </section>
    );
  }
}

//Validation
TellName.propTypes = {
  myName: React.PropTypes.string.isRequired,
  myAge: React.PropTypes.string.isRequired
}
