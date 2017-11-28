import React, { Component } from 'react';
import ButtonStyle from '../styles/components/_Button.pcss';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ButtonStyle.root__form__button}>
        <button type={this.props.type} className={ButtonStyle.button}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
