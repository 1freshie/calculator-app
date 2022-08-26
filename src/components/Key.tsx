import React from 'react';

import classes from './Key.module.css';

const getClassName = (value: number | string) => {
  switch (value) {
    case 'DEL':
      return classes.blue;
    case 'RESET':
      return `${classes.blue} ${classes.long}`;
    case '=':
      return classes.red;
    default:
      return classes.gray;
  }
};

const Key: React.FunctionComponent<{
  value: number | string;
  addValueForCalculation: (value: number | string) => void;
}> = (props) => {
  const addValueOnClickHandler = () => {
    props.addValueForCalculation(props.value);
  };

  return (
    <button
      className={`${classes.key} ${getClassName(props.value)}`}
      onClick={addValueOnClickHandler}
    >
      {props.value}
    </button>
  );
};

export default Key;
