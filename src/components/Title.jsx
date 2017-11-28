import React from 'react';
import Style from '../styles/components/_Text.pcss';

// React Stateless Functional Components
const Title = ({ quantity }) => (
  <h1 className={Style.title}>{quantity} comments</h1>
);

export default Title;
