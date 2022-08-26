import { useEffect, useState } from 'react';
import classes from './ResultBar.module.css';

type Props = {
  result: string,
}

const ResultBar: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={classes.result}>
      <h4>{props.result}</h4>
    </div>
  );
};

export default ResultBar;
