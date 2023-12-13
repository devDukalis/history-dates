import { FC } from "react";

import classes from "./styles.module.scss";

interface Props {
  description: string;
  date: number;
}

const Slide: FC<Props> = ({ description, date }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemDate}>{date}</div>
      <div className={classes.itemDescription}>{description}</div>
    </div>
  );
};

export default Slide;
