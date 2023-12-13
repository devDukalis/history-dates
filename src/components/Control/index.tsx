import { FC } from "react";

import classes from "./styles.module.scss";

interface Props {
  setNextPeriod: () => void;
  setPrevPeriod: () => void;
  countPeriod: number;
  currentPeriodId: number;
}

const Control: FC<Props> = ({ setNextPeriod, setPrevPeriod, currentPeriodId, countPeriod }) => {
  const disableNextButton = countPeriod === currentPeriodId;
  const disablePrevButton = currentPeriodId === 1;

  return (
    <div className={classes.control}>
      <button
        disabled={disablePrevButton}
        onClick={setPrevPeriod}
        className={classes.buttonPrev}></button>

      <button
        disabled={disableNextButton}
        onClick={setNextPeriod}
        className={classes.buttonNext}></button>
    </div>
  );
};

export default Control;
