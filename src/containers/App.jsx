import React, { Component } from 'react';
import '../styles/style.pcss';
import Title from '../components/Title';
import Form from './Form';
import Style from '../styles/components/_Form.pcss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    this.onCounter = this.onCounter.bind(this);
  }

  onCounter(quantity) {
    this.setState({ number: quantity });
  }

  render() {
    return (
      <div className={Style.root__boxcontainer}>
        <div className={Style.root__boxcontainer__form}>
          <div className={Style.root__form__title}>
            <Title quantity={this.state.number} />
          </div>
          <div className={Style.root__form__container}>
            <Form onCounter={this.onCounter} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
