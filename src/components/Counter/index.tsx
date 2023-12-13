import { FC } from "react";

import classes from "./styles.module.scss";

interface Props {
  countPeriod: number;
  currentPeriodId: number;
}

const Counter: FC<Props> = ({ currentPeriodId, countPeriod }) => {
  const counter = `0${currentPeriodId}/0${countPeriod}`;

  return <div className={classes.counter}>{counter}</div>;
};

export default Counter;
