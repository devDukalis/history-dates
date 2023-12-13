import Circle from "../Circle";
import Heading from "../Heading";
import GradientBlock from "../GradientBlock";

import classes from "./styles.module.scss";

const PageContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.lineHorizontal}></div>
      <div className={classes.lineVertical}></div>
      <div className={classes.lineGradient}>
        <GradientBlock />
      </div>
      <div className={classes.title}>
        <Heading />
      </div>
      <Circle />
    </div>
  );
};

export default PageContainer;
