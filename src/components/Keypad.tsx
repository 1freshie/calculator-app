import React from 'react';
import Key from './Key';

import classes from './Keypad.module.css';

const KEYPAD_VALUES = [
  7,
  8,
  9,
  'DEL',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  'x',
  'RESET',
  '=',
];

const Keypad: React.FunctionComponent<{ addValueForCalculation: (value: number | string) => void }> = (props) => {
  return (
    <div className={classes.keypad}>
      {KEYPAD_VALUES.map((value) => (
        <Key value={value} addValueForCalculation={props.addValueForCalculation} />
      ))}
    </div>
  );
};

export default Keypad;
