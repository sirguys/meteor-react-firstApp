import React from 'react';
//Components
import TellName from '../uis/TellName.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myName: 'Sarawut',
      myAge: '23',
      fatherName: ''
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState({
      myName: 'SirGuys'
    });
  }

  clickOnFather() {
    this.setState({
      fatherName: this.refs.fatherName.value
    });
    this.refs.fatherName.value = '';
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
        <br/><br/>

        <label htmlFor="father">Father Name </label>
        <input
          ref="fatherName"
          id="father"
          type="text"
          onBlur= { () => { this.clickOnFather() } }
        />
        <button
          type="button"
          onClick={ () => { this.clickOnFather() } }
        >
        Send Father Name
        </button><br/><br/>

        <h1>{ this.state.fatherName }</h1>


      </main>
    );
  }
}
