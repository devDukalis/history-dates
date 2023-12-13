import { FC, useEffect, useState } from "react";

import classes from "./styles.module.scss";

interface Props {
  nextStartDate: number;
  nextEndDate: number;
  prevStartDate: number;
  prevEndDate: number;
}

const animationDuration = 600;

const Date: FC<Props> = ({ nextStartDate, nextEndDate, prevStartDate, prevEndDate }) => {
  const [currentStartDate, setCurrentStartDate] = useState(prevStartDate);
  const [currentEndDate, setCurrentEndDate] = useState(prevEndDate);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setInterval>;
    const time = Math.floor(animationDuration / Math.abs(nextStartDate - prevStartDate));

    const animate = () => {
      if (currentStartDate === nextStartDate) {
        return;
      }

      if (currentStartDate < nextStartDate) {
        setCurrentStartDate((prevState) => prevState + 1);
      }

      if (nextStartDate < currentStartDate) {
        setCurrentStartDate((prevState) => prevState - 1);
      }

      timeoutId = setTimeout(animate, time);
    };

    animate();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentStartDate, nextStartDate, prevStartDate]);

  useEffect(() => {
    let timeoutId2: ReturnType<typeof setInterval>;
    const time = Math.floor(animationDuration / Math.abs(nextEndDate - prevEndDate));

    const animate = () => {
      if (currentEndDate === nextEndDate) {
        return;
      }

      if (currentEndDate < nextEndDate) {
        setCurrentEndDate((prevState) => prevState + 1);
      }

      if (nextEndDate < currentEndDate) {
        setCurrentEndDate((prevState) => prevState - 1);
      }

      timeoutId2 = setTimeout(animate, time);
    };

    animate();

    return () => {
      clearTimeout(timeoutId2);
    };
  }, [currentEndDate, nextEndDate, prevEndDate]);

  return (
    <div className={classes.date}>
      <span className={classes.startDate}>{currentStartDate}</span>
      <span className={classes.endDate}>{currentEndDate}</span>
    </div>
  );
};

export default Date;
