import React from 'react';

import classes from './Key.module.css';

const Key: React.FunctionComponent<{ value: number | string }> = (props) => {
  let keyClassType = `${classes.gray}`;

  switch (props.value) {
    case 'DEL':
      keyClassType = `${classes.blue}`;
      break;
    case 'RESET':
      keyClassType = `${classes.blue}`;
      break;
    case '=':
      keyClassType = `${classes.red}`;
      break;
  }

  return <button className={`${classes.key} ${keyClassType}`}>{props.value}</button>;
};

export default Key;
