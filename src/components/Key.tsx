import React from 'react';

import classes from './Key.module.css';

const Key: React.FunctionComponent<{
  value: number | string;
  addValueForCalculation: (value: number | string) => void;
}> = (props) => {
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

  const addValueOnClickHandler = () => {
    props.addValueForCalculation(props.value);
  }

  return (
    <button className={`${classes.key} ${keyClassType}`} onClick={addValueOnClickHandler}>{props.value}</button>
  );
};

export default Key;
