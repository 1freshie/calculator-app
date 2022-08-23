import { useEffect, useState } from 'react';
import classes from './ResultBar.module.css';

const ResultBar: React.FunctionComponent = (props) => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [values, setValues] = useState<(number | string)[]>([]);
  const [result, setResult] = useState(0);

  const addValueForCalculation = (value: number | string) => {
    let newValue = '';
    setCurrentValue((prevValue) => {
      if (isNaN(Number(prevValue)) || prevValue !== '.') {
        newValue = value.toString();
        return newValue;
      }
      newValue = prevValue + value;
      return newValue;
    });
    // setValues((currValues) => {
    //   const newValues = [...currValues, value];
    //   return newValues;
    // });
  };

  useEffect(() => {
    setValues((prevValues) => {
      const newValues = [...prevValues, currentValue];
      return newValues;
    });
  }, [currentValue]);

  const calculateSolutionHandler = () => {};

  return (
    <div className={classes.result}>
      {/* <h4>{values}</h4> */}
      <h4>300</h4>
    </div>
  );
};

export default ResultBar;
