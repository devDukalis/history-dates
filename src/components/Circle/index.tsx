import { useState } from "react";

import Control from "../Control";
import Counter from "../Counter";
import Date from "../Date";
import Slider from "../Slider";
import Divider from "../Divider";

import { data, Event } from "../../temp-data";

import classes from "./styles.module.scss";

const turn = 30;
const fullTurn = 360;

const Circle = () => {
  const [currentPeriodId, setCurrentPeriodId] = useState(1);
  const [prevPeriodId, setPrevPeriodId] = useState(1);
  const [onMouseOverId, setOnMouseOverId] = useState<null | number>(null);
  const [rotateCircle, setRotateCircle] = useState(0);

  const countPeriod = data.length;

  const currentPeriod = data.find((el) => el.id === currentPeriodId);
  const events = currentPeriod?.events as Event[];

  const nextStartDate = currentPeriod?.startDate as number;
  const nextEndDate = currentPeriod?.endDate as number;

  const prevPeriod = data.find((el) => el.id === prevPeriodId);
  const prevStartDate = prevPeriod?.startDate as number;
  const prevEndDate = prevPeriod?.endDate as number;

  const onMouseOverHandler = (id: number) => {
    if (!onMouseOverId && id !== currentPeriodId) {
      setOnMouseOverId(id);
    }
  };

  const setNextPeriod = () => {
    if (currentPeriodId < countPeriod) {
      setRotateCircle((-fullTurn / countPeriod) * currentPeriodId);
      setCurrentPeriodId((prevState) => prevState + 1);
      setPrevPeriodId(currentPeriodId);
    }
  };

  const setPrevPeriod = () => {
    if (1 < currentPeriodId) {
      setRotateCircle((-fullTurn / countPeriod) * (currentPeriodId - 2));
      setCurrentPeriodId((prevState) => prevState - 1);
      setPrevPeriodId(currentPeriodId);
    }
  };

  const onClickHandler = (id: number) => {
    setRotateCircle((-fullTurn / countPeriod) * (id - currentPeriodId) + rotateCircle);
    setCurrentPeriodId(id);
    setPrevPeriodId(currentPeriodId);
  };
  const styleRotateContainer = {
    transform: `rotate(${rotateCircle}deg)`,
    transition: "all 600ms linear",
  };

  const periodForRender = data.map((p, index) => {
    const delta = fullTurn / countPeriod;

    const rotate = index * delta + turn;

    const styleBlock = { transform: `rotate(${rotate}deg)` };

    const styleActiveBlockText = { transform: `rotate(-${turn}deg)` };

    const styleBlockText = {
      transform: `rotate(${-(turn + delta * (p.id - 1) + rotateCircle)}deg)`,
    };

    return (
      <div
        onClick={() => onClickHandler(p.id)}
        onMouseLeave={() => setOnMouseOverId(null)}
        onMouseOver={() => onMouseOverHandler(p.id)}
        key={p.id}
        className={classes.block}
        style={styleBlock}>
        {currentPeriodId === p.id ? (
          <p style={styleActiveBlockText}>
            {p.id}
            <span className={classes.title}>{p.title}</span>
          </p>
        ) : p.id === onMouseOverId ? (
          <p className={classes.animeHover} style={styleBlockText}>
            {p.id}
          </p>
        ) : (
          <div className={classes.emptyBlock}></div>
        )}
      </div>
    );
  });

  return (
    <div className={classes.circle}>
      <div className={classes.wrapperDate}>
        <div className={classes.date}>
          <Date
            nextStartDate={nextStartDate}
            nextEndDate={nextEndDate}
            prevStartDate={prevStartDate}
            prevEndDate={prevEndDate}
          />
        </div>

        <div className={classes.container} style={styleRotateContainer}>
          {periodForRender}
        </div>
      </div>

      <div className={classes.title}>{currentPeriod?.title}</div>

      <Divider />

      <div className={classes.wrapperControl}>
        <Counter currentPeriodId={currentPeriodId} countPeriod={countPeriod} />
        <Control
          currentPeriodId={currentPeriodId}
          countPeriod={countPeriod}
          setNextPeriod={setNextPeriod}
          setPrevPeriod={setPrevPeriod}
        />
      </div>

      <Slider id={currentPeriodId} events={events} />
    </div>
  );
};

export default Circle;
