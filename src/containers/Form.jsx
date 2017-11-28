import React, { Component } from 'react';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import List from '../components/List';
import FormStyle from '../styles/components/_Form.pcss';

import { comments } from '../comments';

class Form extends Component {
  constructor(props) {
    super(props);

    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    data = data || comments || [];

    this.state = {
      data
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
  }

  componentDidMount() {
    this.props.onCounter(this.state.data.length);
  }

  onSubmit(e) {
    e.preventDefault();

    const self = this;

    let { comment } = self;

    const value = (comment.value || '').trim();
    const dataSorted = self.state.data.sort((a, b) => +a.id - +b.id);

    let id = (dataSorted[dataSorted.length - 1] || {}).id || 0;
    id += 1;

    if (value) {
      self.state.data.push({
        id,
        comment: value
      });

      self.setState({ id, data: self.state.data });
    }

    comment.value = '';
    comment.focus();
    self.updateStorage();
  }

  handleEdit(id, value) {
    const self = this;

    const data = self.state.data.find(comment => +comment.id === +id);
    data.comment = value;

    self.setState({ data: self.state.data });
    self.updateStorage();
  }

  handleRemove(id) {
    const self = this;

    const data = self.state.data.filter(item => item.id !== id);

    self.setState({ data }, self.updateStorage);
  }

  updateStorage() {
    const self = this;

    localStorage.setItem('data', JSON.stringify(self.state.data));
    self.props.onCounter(self.state.data.length);
  }

  render() {
    return (
      <form className={FormStyle.root__form} onSubmit={this.onSubmit}>
        <div className={FormStyle.root__form__controls}>
          <TextArea
            name="comment"
            maxLength="1000"
            placeholder="Write a comment..."
            ownClassName="name"
            comment={node => {
              this.comment = node;
            }}
          />
          <Button type="submit" text="comment" />
          <List
            data={this.state.data}
            edit={this.handleEdit}
            remove={this.handleRemove}
          />
        </div>
      </form>
    );
  }
}

export default Form;
