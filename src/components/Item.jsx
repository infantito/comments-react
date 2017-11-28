import React from 'react';
import Style from '../styles/components/_Input.pcss';
import Icon from './Icon';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { disabled: 'disabled' };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    const self = this;

    const value = self.textarea.value.trim();

    if (!value) {
      return self.textarea.focus();
    }

    self.textarea.value = value;

    self.setState({ disabled: 'disabled' });
    self.props.edit(self.props.id, value);
  }

  handleUpdate() {
    const self = this;
    const { disabled } = self.state;

    if (disabled) {
      self.setState({ disabled: '' }, () => self.textarea.focus());
    }
  }

  render() {
    const { id, text, remove } = this.props;

    const { disabled } = this.state;

    return (
      <li>
        <div className={Style.root__form__item}>
          <textarea
            className={Style.root__form__input}
            defaultValue={text}
            disabled={disabled}
            ref={component => {
              this.textarea = component;
            }}
            required="required"
          />
          <div className={Style.root__form__actions}>
            <Icon
              action={disabled ? this.handleUpdate : this.handleSave}
              icon={disabled ? 'edit' : 'save'}
            />
            <Icon action={() => remove(id)} icon="remove" />
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
