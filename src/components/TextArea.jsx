import React from 'react';
import FormStyle from '../styles/components/_Form.pcss';
import TextAreaStyle from '../styles/components/_TextArea.pcss';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={FormStyle.root__form__block}>
        <textarea
          className={TextAreaStyle.root__form__textarea}
          maxLength={this.props.maxLength}
          placeholder={this.props.placeholder}
          ref={this.props.comment}
          required="required"
        />
      </div>
    );
  }
}

export default TextArea;
