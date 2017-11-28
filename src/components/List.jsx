import React from 'react';
import Item from './Item';
import FormStyle from '../styles/components/_Form.pcss';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, edit, remove } = this.props;

    return (
      <div className={FormStyle.root__form__block}>
        <ul className={FormStyle.root__form__list}>
          {data.map(({ id, comment }) => (
            <Item id={id} text={comment} key={id} edit={edit} remove={remove} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
