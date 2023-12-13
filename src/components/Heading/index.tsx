import { FC } from "react";

import classes from "./styles.module.scss";

interface Props {
  value?: string;
}

const Heading: FC<Props> = ({ value = "Исторические даты" }) => {
  return <h1 className={classes.title}>{value}</h1>;
};

export default Heading;
