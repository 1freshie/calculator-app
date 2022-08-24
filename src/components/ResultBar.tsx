import { useEffect, useState } from 'react';
import classes from './ResultBar.module.css';

const ResultBar: React.FunctionComponent<{ values: string[] }> = (props) => {
  const [result, setResult] = useState(0);

  

  const calculateSolutionHandler = () => {};

  return (
    <div className={classes.result}>
      <h4>300,000</h4>
    </div>
  );
};

export default ResultBar;
