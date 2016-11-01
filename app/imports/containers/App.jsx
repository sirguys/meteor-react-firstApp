import React from 'react';
//Components
import TellName from '../uis/TellName.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myName: 'Sarawut',
      myAge: '23'
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState({
      myName: 'SirGuys'
    });
  }

  render() {
    return(
      <main>
        <h1>Hello, My name is SirGuys</h1>
        <TellName
          myName={this.state.myName}
          myAge={this.state.myAge}
        />
        <button
          type='botton'
          onClick={this.handlerClick}
        >Change Name
        </button>
      </main>
    );
  }
}
