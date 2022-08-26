import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Keypad from './components/Keypad';
import ResultBar from './components/ResultBar';

const OPERATORS = '+-/x';
const SYMBOLS = OPERATORS + '.';

const calculate = (a: string | number, b: string | number, operator: string): number => {
  switch (operator) {
    case '+':
      return +a + +b;
    case '-':
      return +a - +b;
    case 'x':
      return +a * +b;
    case '/':
      return +a / +b;
    default:
      return 0;
  }
}

const computateResult = (expression: string): string => {
  const numbers = expression.split(/[+x/-]/g);
  let length = 0;
  const operators = numbers.reduce<string[]>((array, number) => {
    length += number.length + 1;
    if (expression[length]) {
      array.push(expression[length - 1]);
    }
    return array;
  }, []);
  console.log(operators, numbers);

  return operators.reduce<number>((result, operator, index) => {
    return calculate(result, numbers[index + 1], operator);
  }, +numbers[0]).toString();
};

const App: React.FunctionComponent = () => {
  // const [changableValue, setChangableValue] = useState<string>('');
  // const [values, setValues] = useState<string[]>([]);
  const [expression, setExpression] = useState<string>('0');

  // let currentValues: string[] = [];
  // let changableValue: string = '';

  const addValueForCalculationHandler = (value: number | string) => {
    setExpression((prevExpression) => {
      if (value === '=') {
        return computateResult(prevExpression);
      }

      if (value === 'RESET') return '0';

      if (value === 'DEL') {
        if (prevExpression.length === 1) {
          return '0';
        }
        return prevExpression.slice(0, prevExpression.length - 1);
      }

      // if (prevExpression === '0' && typeof value === 'number') {
      //   return value.toString();
      // }

      // if (prevExpression === '0' && typeof value === 'string') {
      //   return prevExpression + value;
      // }

      const lastChar = prevExpression[prevExpression.length - 1];

      if (
        typeof value === 'string' &&
        OPERATORS.includes(lastChar) &&
        OPERATORS.includes(value)
      ) {
        return prevExpression.slice(0, prevExpression.length - 1) + value;
      }

      if (OPERATORS.includes(lastChar) && value === '.') {
        return prevExpression + '0' + value;
      }

      if (value === '.') {
        const numbers = prevExpression.split(/[+x/-]/g);
        const lastNumber = numbers[numbers.length - 1];
        if (lastNumber.includes(value)) {
          return prevExpression;
        }
        return prevExpression + value;
      }

      const prevToLastChar = prevExpression[prevExpression.length - 2];

      if (
        lastChar === '0' &&
        (!prevToLastChar || OPERATORS.includes(prevToLastChar)) &&
        typeof value === 'number'
      ) {
        return prevExpression.slice(0, prevExpression.length - 1) + value;
      }

      // console.log(prevToLastChar, lastChar);

      return prevExpression + value;
    });
    // let currentValue = value.toString();
    // if (currentValue === '') return;

    // setChangableValue((previousChangableValue) => {
    //   let newChangableValue: string = '';
    //   // if (!isNaN(Number(currentValue)) || currentValue === '.') {
    //   //   newChangableValue = previousChangableValue + currentValue;
    //   // } else {
    //   //   newChangableValue = currentValue;
    //   // }

    //   newChangableValue =
    //     !isNaN(Number(currentValue)) || currentValue === '.'
    //       ? previousChangableValue + currentValue
    //       : currentValue;

    //   return newChangableValue;
    // });
  };

  // console.log(changableValue)

  // useEffect(() => {
  //   if (changableValue === '') return;

  //   // console.log('1: ' + newValues)
  //   let isRealValue = !isNaN(Number(changableValue));

  //   setValues((previousValues) => {
  //     let newValues = [...previousValues];
  //     let changableIndex = previousValues.indexOf(changableValue);

  //     // if (isRealValue) {
  //     //   // newValues = previousValues;
  //     //   // console.log('2: ' + newValues)
  //     //   newValues = newValues.splice(changableIndex, newValues.length - 1);
  //     // } else {
  //     //   newValues = [...previousValues, changableValue];
  //     // }
  //     // let newValues = [...previousValues, changableValue];

  //     newValues = isRealValue
  //       ? newValues.splice(changableIndex, newValues.length - 1)
  //       : [...previousValues, changableValue];

  //     return newValues;
  //   });
  //   // console.log(newValues)
  // }, [changableValue]);

  // // console.log(currentValues);
  // console.log(values);

  return (
    <div className="container">
      <Header />
      <ResultBar result={expression} />
      <Keypad addValueForCalculation={addValueForCalculationHandler} />
    </div>
  );
};

export default App;
