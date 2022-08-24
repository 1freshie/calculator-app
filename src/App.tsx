import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Keypad from './components/Keypad';
import ResultBar from './components/ResultBar';

const App = () => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [values, setValues] = useState<string[]>([]);

  const addValueForCalculationHandler = (value: number | string) => {
    let newValue = '';
    setCurrentValue((prevValue) => {
      if (isNaN(Number(prevValue)) || prevValue !== '.') {
        newValue = value.toString();
        return newValue;
      }
      newValue = prevValue + value;
      return newValue;
    });
  };

  useEffect(() => {
    setValues((prevValues) => {
      const newValues = [...prevValues, currentValue];
      return newValues;
    });
  }, [currentValue]);

  return (
    <div className="container">
      <Header />
      <ResultBar values={values} />
      <Keypad addValueForCalculation={addValueForCalculationHandler} />
    </div>
  );
}

export default App;
