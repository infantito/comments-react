import React from 'react';

const Actions = ({ icon, action }) => (
  <span className={`i-${icon}`} onClick={action} />
);

export default Actions;
